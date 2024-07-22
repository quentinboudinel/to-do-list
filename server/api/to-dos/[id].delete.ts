import { ToDo } from "~/types";

export default defineEventHandler(async (event) => {
  const toDoId = getRouterParam(event, "id");
  const toDos: ToDo[] = JSON.parse(getCookie(event, "toDos") || "[]");
  const index = toDos.findIndex((toDo) => toDo.id === toDoId);
  if (index === -1)
    throw createError({
      status: 404,
    });
  toDos.splice(index, 1);
  setCookie(event, "toDos", JSON.stringify(toDos));
  setResponseStatus(event, 204);
});
