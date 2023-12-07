import { PointEstimate, Status, TaskTag } from "../../../models/task"
import { User } from "../../../models/user"

export interface TaskCardProps {
  name: string
  pointEstimate?: PointEstimate
  dueDate?: Date
  assign?:User
  ios?: boolean
  nodes?: number
  comments?: number
  android?: boolean
  status?:Status
  id:string
  createAt?:Date
  position?:number
  tags?:TaskTag[]
  creator?:User
  /* 
   assignee: User
  createdAt: DateTime!
  creator: User!
  dueDate: DateTime!
  id: ID!
  name: String!
  pointEstimate: PointEstimate!
  position: Float!
  status: Status!
  tags: [TaskTag!]! */
}
