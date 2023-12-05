import { BreakpointPadding } from "../components/atoms/StyledBox/box.interface"
import {  BreakpointPosition, PositionType } from "../components/atoms/StyledGrid/grid.interface"
import { BreakpointType } from "./grid.function"

export const getPosition = (
  position?: PositionType | BreakpointPosition,
  breakpoint?: BreakpointType
) => {
  if (typeof position === 'object' && breakpoint)
    return position[breakpoint] || 'static'
  if (typeof position === 'string') return position
  return false
}


export const getPadding = (
  padding?: number | BreakpointPadding,
  breakpoint?: BreakpointType
) => {
  if (typeof padding === 'object' && breakpoint)
    return `${padding[breakpoint]}px` || 0
  if (typeof padding === 'number') return padding
  return false
}
