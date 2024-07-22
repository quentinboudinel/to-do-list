import type { InferType } from "yup";

import { toDoSchema } from "~/schemas";

export interface ToDo {
  id: string;
  label: string;
  isDone: boolean;
}

export type ToDoSchema = InferType<typeof toDoSchema>;
