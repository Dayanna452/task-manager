import { TasksCellProps } from "../../molecules/TaskCell/cell.interface"

export interface DropdownProps{
  children:React.ReactNode
  open?:boolean
  header?:TasksCellProps
}