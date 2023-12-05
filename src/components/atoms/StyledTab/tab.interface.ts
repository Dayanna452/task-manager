import { Sizes } from "../../../@types/base.type"
import { FlexDirectionType } from "../StyledGrid/grid.interface"

export interface TabProps{
  size?:Sizes
  text?:string|number
  flexDirection?:FlexDirectionType
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
}

export interface TabContainerProps extends Omit<TabProps, ''>{}