import {
  AlignItemsType,
  BreakpointSizesType,
  JustifyContentType
} from '../@types/base.type'
import {
  DisplayType,
  BreakpointOffset,
  FlexDirectionType,
  BreakpointDisplay,
  BreakpointAlignItems,
  BreakpointFlexDirection,
  BreakpointJustifyContent,
} from '../components/atoms/StyledGrid/grid.interface'

export type BreakpointType =
  | 'xs'
  | 'xs2'
  | 'sm'
  | 'sm2'
  | 'md'
  | 'md2'
  | 'lg'
  | 'lg2'
  | 'xl'
  | 'xl2'
  | 'xl3'
  | 'xl4'
  | 'xl5'

export const getGridSpacing = (
  spacing?: number | BreakpointSizesType,
  breakpoint?: BreakpointType
) => {
  if (typeof spacing === 'number') return `${spacing * 8}px`
  if (typeof spacing === 'object' && breakpoint)
    return `${(Number(spacing[breakpoint]) || 0) * 8}px`
  return '0px'
}

export const getGridMinHeight = (
  minHeight?: number | string | BreakpointSizesType,
  breakpoint?: BreakpointType
) => {
  if (typeof minHeight === 'number') return `${minHeight}px`
  if (typeof minHeight === 'string') return minHeight
  if (typeof minHeight === 'object' && breakpoint)
    return `${minHeight[breakpoint] || 0}px`
  return false
}

export const getGridJustifyContent = (
  justifyContent?: JustifyContentType | BreakpointJustifyContent,
  breakpoint?: BreakpointType
) => {
  if (typeof justifyContent === 'object' && breakpoint)
    return justifyContent[breakpoint] || 'flex-start'
  if (typeof justifyContent === 'string') return justifyContent
  return false
}

export const getGridAlignItems = (
  alignItems?: AlignItemsType | BreakpointAlignItems,
  breakpoint?: BreakpointType
) => {
  if (typeof alignItems === 'object' && breakpoint)
    return alignItems[breakpoint] || 'stretch'
  if (typeof alignItems === 'string') return alignItems
  return false
}

export const getGridDisplay = (
  display?: DisplayType | BreakpointDisplay,
  breakpoint?: BreakpointType
) => {
  if (typeof display === 'object' && breakpoint)
    return display[breakpoint] || 'block'
  if (typeof display === 'string') return display
  return false
}

export const getGridFlexDirection = (
  flexDirection?: FlexDirectionType | BreakpointFlexDirection,
  breakpoint?: BreakpointType
) => {
  if (typeof flexDirection === 'object' && breakpoint)
    return flexDirection[breakpoint] || 'row'
  if (typeof flexDirection === 'string') return flexDirection
  return false
}

export const getGridOffset = (
  offset?: number | BreakpointOffset,
  breakpoint?: BreakpointType
) => {
  if (typeof offset === 'object' && breakpoint) return offset[breakpoint]
  if (typeof offset === 'number') return offset
  return false
}
