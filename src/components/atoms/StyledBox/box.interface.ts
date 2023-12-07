import { ThemeType } from '../../../interfaces/theme.interface'
import {
  BreakpointDisplay,
  BreakpointPosition,
  DisplayType,
  PositionType
} from '../StyledGrid/grid.interface'

export interface BoxProps {
  padding?: number | BreakpointPadding
  width?: string
  top?:string
  left?:string
  right?:string
  bottom?:string
  borderRadius?:number
  $display?: DisplayType | BreakpointDisplay
  height?: string
  paddingTop?: number
  paddingLeft?: number
  padddingRight?: number
  paddingBottom?: number
  children: React.ReactNode
  position?: PositionType | BreakpointPosition
  bgColor?: (theme: Pick<ThemeType, 'palette'>) => string
}

export interface BreakpointPadding {
  xs?: number
  xs2?: number
  sm?: number
  sm2?: number
  md?: number
  md2?: number
  lg?: number
  lg2?: number
  xl?: number
  xl2?: number
  xl3?: number
  xl4?: number
  xl5?: number
}