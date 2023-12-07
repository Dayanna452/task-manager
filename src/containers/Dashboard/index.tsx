import { useContext } from 'react'

import { TaskContext } from '../../contexts/TaskContext'
import { Board } from '../../components/templates/dashboard/Board'

export const Dashboard = () => {
  const { tasksDone, colsOrder, tasksInProgress, tasksList, tasksToDo } =
    useContext(TaskContext)

  const taskObj = {
    TODO: tasksToDo,
    IN_PROGRESS: tasksInProgress,
    DONE: tasksDone
  }


  return (
    <Board tasks={tasksList} colsOrder={colsOrder} tasksState={taskObj} />
  )
}
