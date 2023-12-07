import { useLazyQuery, useQuery } from '@apollo/client'
import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from '../gql/mutations/task.mutation'
import { GET_USERS } from '../gql/queries/user.task'
import { User } from '../models/user'

export const useUsers = () => {
  const users = useQuery<{ users: User[] }>(GET_USERS, {
    variables: {
      input: {}
    },
  })

 /*  const [createTaskFn,createTaskVn]=useLazyQuery(CREATE_TASK)
  const [updateTaskFn,updateTaskVn]=useLazyQuery(UPDATE_TASK)
  const [deleteTaskFn,deleteTaskVn]=useLazyQuery(DELETE_TASK)

  const createTask=()=>{}
   */

  return { ...users }
}
