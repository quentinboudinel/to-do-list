import { v4 as uuidv4 } from "uuid";

import { ToDo } from "~/types";

export default defineEventHandler(async (event) => {
  const toDo: Partial<ToDo> = await readBody(event);
  if (toDo.id === undefined) toDo.id = uuidv4();
  if (toDo.label === undefined)
    throw createError({
      status: 400,
    });
  if (toDo.isDone === undefined) toDo.isDone = false;
  const toDos: ToDo[] = JSON.parse(getCookie(event, "toDos") || "[]");
  toDos.push(toDo as ToDo);
  setCookie(event, "toDos", JSON.stringify(toDos));
  return toDo;
});
