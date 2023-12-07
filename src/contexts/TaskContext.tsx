import { createContext } from 'react'

import { useTask } from '../hooks/useTask'
import { TaskType } from '../@types/task.type'
import { getTaskIds, formatTasks } from '../utils/task'

interface TaskContextProps {
  tasksList: TaskType
  colsOrder: string[]
  tasksToDo: string[]
  tasksDone: string[]
  tasksInProgress: string[]
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
)

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, error } = useTask()

  const tasks = data?.tasks || []
  const tasksList = formatTasks(tasks)
  const tasksToDo = getTaskIds(tasks, 'TODO')
  const tasksInProgress = getTaskIds(tasks, 'IN_PROGRESS')
  const tasksDone = getTaskIds(tasks, 'DONE')
  const colsOrder = ['TODO', 'IN_PROGRESS', 'DONE']

  return (
    <TaskContext.Provider
      value={{
        tasksList,
        colsOrder,
        tasksToDo,
        tasksDone,
        tasksInProgress
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

const Consumer = TaskContext.Consumer

export { Provider, Consumer }
// eslint-disable-next-line import/no-anonymous-default-export
export default { Provider, Consumer }
