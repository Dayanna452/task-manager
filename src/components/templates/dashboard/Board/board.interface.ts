import { TaskType } from '../../../../@types/task.type'

export interface TaskBoardProps {
  tasks: TaskType
  colsOrder: string[]
  tasksState: TasksIdsState
}

export type TasksIdsState = {
  TODO: string[]
  DONE: string[]
  IN_PROGRESS: string[]
}
