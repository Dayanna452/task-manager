import { useMutation, useQuery } from '@apollo/client'
import { GET_TASKS } from '../gql/queries/task.query'
import { Task, TaskSend } from '../models/task'
import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK
} from '../gql/mutations/task.mutation'

export const useTask = () => {
  const tasks = useQuery<{ tasks: Task[] }>(GET_TASKS, {
    variables: {
      input: {}
    }
  })

  const [createTaskFn, createTaskVn] = useMutation(CREATE_TASK, {
    refetchQueries: [GET_TASKS]
  })
  //const [updateTaskFn, updateTaskVn] = useLazyQuery(UPDATE_TASK)
  const [deleteTaskFn, deleteTaskVn] = useMutation(DELETE_TASK, {
    refetchQueries: [GET_TASKS]
  })

  const createTask = async (task: TaskSend) => {
    try {
      const create = await createTaskFn({
        variables: {
          input: task
        }
      })
      return create
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (id: string) => {
    try {
      const create = await deleteTaskFn({
        variables: {
          input: { id }
        }
      })
      return create
    } catch (error) {
      console.log(error)
    }
  }

  return {
    ...tasks,
    createTask,
    deleteTask,
    create: {
      loading: createTaskVn.loading,
      error: createTaskVn.error,
      data: createTaskVn.data
    },
    delete: {
      loading: deleteTaskVn.loading,
      data: deleteTaskVn.data,
      error: deleteTaskVn.error
    }
  }
}
