import { TaskIdsType, TaskType } from '../@types/task.type'

export const initialData = (colsOrder: any) => {
  const data = {
    tasks: {} as TaskType,
    columns: {
      TODO: {
        id: 'TODO',
        title: 'Working',
        taskIds: []
      },
      IN_PROGRESS: {
        id: 'IN_PROGRESS',
        title: 'In Progress',
        taskIds: []
      },
      DONE: {
        id: 'DONE',
        title: 'Completed',
        taskIds: []
      }
    } as TaskIdsType,
    colsOrder
  }
  return data
}
