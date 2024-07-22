import { object, string } from "yup";

export const toDoSchema = object().shape({
  label: string().required(),
});
