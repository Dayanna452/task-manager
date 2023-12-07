import { TaskType } from '../@types/task.type'
import { Status, Task } from '../models/task'

export const reorder = (
  sourceCol: any,
  starIndex: number,
  endIndex: number
) => {
  const newTaskIds = Array.from(sourceCol.taskIds)
  const [removed] = newTaskIds.splice(starIndex, 1)
  newTaskIds.splice(endIndex, 0, removed)

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds
  }

  return newColumn
}


export function separateTitle (title: string) {
  const index = title.indexOf('(')
  const newTitle =title.substring(0, index)
  return newTitle
}


export function getTaskIds (task: Task[], status: Status) {
  return task.filter(task => task.status === status).map(task => task.id)
}

export function formatTasks (tasks: Task[]) {
  let taskList: TaskType = {}

  tasks.forEach(task => {
    taskList[task.id] = task
  })

  return taskList
}