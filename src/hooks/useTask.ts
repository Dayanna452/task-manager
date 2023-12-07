import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_TASKS } from '../gql/queries/task.query'
import { Task } from '../models/task'
import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from '../gql/mutations/task.mutation'

export const useTask = () => {
  const tasks = useQuery<{ tasks: Task[] }>(GET_TASKS, {
    variables: {
      input: {}
    }
  })

 /*  const [createTaskFn,createTaskVn]=useLazyQuery(CREATE_TASK)
  const [updateTaskFn,updateTaskVn]=useLazyQuery(UPDATE_TASK)
  const [deleteTaskFn,deleteTaskVn]=useLazyQuery(DELETE_TASK)

  const createTask=()=>{}
   */

  return { ...tasks }
}
