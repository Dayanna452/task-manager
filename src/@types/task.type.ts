import { Task } from "../models/task"

export interface Column {
  id: string
  title: string
  taskIds: string[]
}


export type TaskIdsType = Record<string, Column>
export type TaskType = Record<string, Task>

