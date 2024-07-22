export default defineEventHandler((event) => {
  setCookie(event, "toDos", "[]");
  setResponseStatus(event, 204);
});
