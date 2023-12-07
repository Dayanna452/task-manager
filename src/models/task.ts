import { User } from "./user"

export interface Task {
  __typename?: 'Task'
  id: string
  name: string
  pointEstimate: PointEstimate
  dueDate: Date
  tags: TaskTag[]
  assignee?: User
  status: Status
}

export interface TaskSend {
  id?: string
  name: string
  pointEstimate: PointEstimate
  dueDate: Date
  tags: TaskTag[]
  assigneeId?: string
  status: Status
}

export type PointEstimate = 'EIGHT' | 'FOUR' | 'ONE' | 'TWO' | 'ZERO'

export type TaskTag = 'ANDROID' | 'IOS' | 'NODE_JS' | 'RAILS' | 'REACT'

export type Status = 'BACKLOG' | 'CANCELLED' | 'DONE' | 'IN_PROGRESS' | 'TODO'
