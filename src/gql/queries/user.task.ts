import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query USER {
    users {
      avatar
      email
      fullName
      id
      createdAt
    }
  }
`

export const GET_PROFILE = gql`
  query profile {
    profile {
      avatar
      email
      fullName
      updatedAt
      id
      createdAt
      type
    }
  }
`
