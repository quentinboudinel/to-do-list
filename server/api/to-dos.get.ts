export default defineEventHandler((event) => {
  const toDos = getCookie(event, "toDos") || [];

  return toDos;
});
