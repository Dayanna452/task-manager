import { Sizes } from '../../../@types/base.type'
import { FlexDirectionType } from '../StyledGrid/grid.interface'

export interface TabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, ''> {
  size?: Sizes
  text?: string | number
  selected?: boolean
  flexDirection?: FlexDirectionType
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
  navSize?: number
}

export interface TabContainerProps extends Omit<TabProps, ''> {}
