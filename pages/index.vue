<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";

import { toDoSchema } from "~/schemas";
import type { ToDo, ToDoSchema } from "~/types";

const EMPTY_STATE = {
  label: undefined,
};

const toDos = useCookie<ToDo[]>("toDos", { default: () => [], readonly: true });

const state = ref({ ...EMPTY_STATE });

async function deleteToDos() {
  try {
    await $fetch("/api/to-dos", {
      method: "DELETE",
    });
    refreshCookie("toDos");
  } catch (error) {
    console.warn(error);
  }
}

async function createToDo(event: FormSubmitEvent<ToDoSchema>) {
  try {
    await $fetch("/api/to-dos", {
      method: "POST",
      body: event.data,
    });
    refreshCookie("toDos");
    state.value = { ...EMPTY_STATE };
  } catch (error) {
    console.warn(error);
  }
}

async function partialUpdateToDo(toDo: ToDo, partialToDo: Partial<ToDo>) {
  try {
    await $fetch(`/api/to-dos/${toDo.id}`, {
      method: "PATCH",
      body: partialToDo,
    });
    refreshCookie("toDos");
  } catch (error) {
    console.warn(error);
  }
}

async function deleteToDo(toDo: ToDo) {
  try {
    await $fetch(`/api/to-dos/${toDo.id}`, {
      method: "DELETE",
    });
    refreshCookie("toDos");
  } catch (error) {
    console.warn(error);
  }
}

onMounted(async () => {
  await $fetch("/api/to-dos");
});
</script>

<template>
  <section class="grow flex flex-col gap-4">
    <template v-if="toDos.length">
      <UButton class="self-end" @click="deleteToDos">Delete all</UButton>

      <ul class="flex flex-col gap-2">
        <li v-for="toDo of toDos" class="flex items-center gap-2">
          <UCheckbox
            :model-value="toDo.isDone"
            @click.prevent="partialUpdateToDo(toDo, { isDone: !toDo.isDone })"
          />
          <Focus>
            <template #out="{ props }">
              <p
                v-bind="props"
                :class="{ 'line-through': toDo.isDone }"
                tabindex="0"
              >
                {{ toDo.label }}
              </p>
            </template>

            <template #in="{ props }">
              <Ref v-slot="{ value }" :default="toDo.label">
                <UInput
                  v-bind="props"
                  v-model="value.value"
                  @change="partialUpdateToDo(toDo, { label: value.value })"
                />
              </Ref>
            </template>
          </Focus>

          <div class="self-end grow border-b border-white border-dotted"></div>

          <UButton
            type="button"
            icon="i-material-symbols-delete"
            @click="deleteToDo(toDo)"
          />
        </li>
      </ul>
    </template>
    <p v-else>No to-do yet.</p>
  </section>

  <section>
    <UForm
      class="flex items-end gap-2"
      :schema="toDoSchema"
      :state="state"
      @submit="createToDo"
    >
      <UFormGroup class="grow" label="Label" name="label" required>
        <UInput v-model="state.label" type="text" />
      </UFormGroup>
      <UButton type="submit">Add</UButton>
    </UForm>
  </section>

  <UModal :model-value="$route.fullPath === '/about'">
    <UCard>
      <template #header>
        <div>About</div>
      </template>

      <template #default>
        <p class="mb-2">
          This is my simplistic implementation of a to-do list using Nuxt 3.
        </p>
        <p class="mb-2">
          My goal was to play wit both client and server possibilities of Nuxt
          without having to setup a database.
        </p>
        <p class="mb-2">Thus, I implemented an API relying on cookies alone.</p>
      </template>

      <template #footer>
        <NuxtLink to="/">
          <UButton>Close</UButton>
        </NuxtLink>
      </template>
    </UCard>
  </UModal>
</template>
