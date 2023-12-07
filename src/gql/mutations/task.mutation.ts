import { gql } from '@apollo/client'

export const CREATE_TASK = gql`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      assignee {
        fullName
        email
      }
      createdAt
      creator {
        avatar
        fullName
      }
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`

export const UPDATE_TASK = gql`
  mutation UPDATE_TASK($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      assignee {
        fullName
        avatar
        email
      }
      creator {
        avatar
        fullName
        email
      }
      dueDate
      pointEstimate
      name
      position
      status
      tags
    }
  }
`

export const DELETE_TASK = gql`
  mutation DELETE_TASK($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      assignee {
        avatar
        fullName
        email
        type
        updatedAt
        id
      }
    }
  }
`
