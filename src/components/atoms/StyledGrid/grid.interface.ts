import { BreakpointSizesType } from '../../../@types/base.type'
import { MutableRefObject } from 'react'

export type JustifyContentType =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
export type AlignItemsType =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

export type FlexDirectionType =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'

export type DisplayType =
  | 'inline'
  | 'block'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'none'
export interface BreakpointJustifyContent {
  xs?: JustifyContentType
  xs2?: JustifyContentType
  sm?: JustifyContentType
  sm2?: JustifyContentType
  md?: JustifyContentType
  md2?: JustifyContentType
  lg?: JustifyContentType
  lg2?: JustifyContentType
  xl?: JustifyContentType
  xl2?: JustifyContentType
  xl3?: JustifyContentType
  xl4?: JustifyContentType
  xl5?: JustifyContentType
}

export interface BreakpointAlignItems {
  xs?: AlignItemsType
  xs2?: AlignItemsType
  sm?: AlignItemsType
  sm2?: AlignItemsType
  md?: AlignItemsType
  md2?: AlignItemsType
  lg?: AlignItemsType
  lg2?: AlignItemsType
  xl?: AlignItemsType
  xl2?: AlignItemsType
  xl3?: AlignItemsType
  xl4?: AlignItemsType
  xl5?: AlignItemsType
}

export interface BreakpointDisplay {
  xs?: DisplayType
  xs2?: DisplayType
  sm?: DisplayType
  sm2?: DisplayType
  md?: DisplayType
  md2?: DisplayType
  lg?: DisplayType
  lg2?: DisplayType
  xl?: DisplayType
  xl2?: DisplayType
  xl3?: DisplayType
  xl4?: DisplayType
  xl5?: DisplayType
}

export interface BreakpointFlexDirection {
  xs?: FlexDirectionType
  xs2?: FlexDirectionType
  sm?: FlexDirectionType
  sm2?: FlexDirectionType
  md?: FlexDirectionType
  md2?: FlexDirectionType
  lg?: FlexDirectionType
  lg2?: FlexDirectionType
  xl?: FlexDirectionType
  xl2?: FlexDirectionType
  xl3?: FlexDirectionType
  xl4?: FlexDirectionType
  xl5?: FlexDirectionType
}

export interface BreakpointOffset {
  xs?: number | 'auto'
  xs2?: number | 'auto'
  sm?: number | 'auto'
  sm2?: number | 'auto'
  md?: number | 'auto'
  md2?: number | 'auto'
  lg?: number | 'auto'
  lg2?: number | 'auto'
  xl?: number | 'auto'
  xl2?: number | 'auto'
  xl3?: number | 'auto'
  xl4?: number | 'auto'
  xl5?: number | 'auto'
}

export interface GridUIProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  container?: boolean
  ref?: MutableRefObject<any> | undefined
  $spacing?: number | BreakpointSizesType
  columns?: number | BreakpointSizesType
  rowSpacing?: number | BreakpointSizesType
  minHeight?: number | string | BreakpointSizesType
  columnSpacing?: number | BreakpointSizesType
  justifyContent?: JustifyContentType | BreakpointJustifyContent
  alignItems?: AlignItemsType | BreakpointAlignItems
  $display?: DisplayType | BreakpointDisplay
  disableEqualOverflow?: boolean
  flexDirection?: FlexDirectionType | BreakpointFlexDirection
  $offset?: number | 'auto' | BreakpointOffset
  xs?: number | 'auto' | boolean
  xs2?: number | 'auto' | boolean
  sm?: number | 'auto' | boolean
  sm2?: number | 'auto' | boolean
  md?: number | 'auto' | boolean
  md2?: number | 'auto' | boolean
  lg?: number | 'auto' | boolean
  lg2?: number | 'auto' | boolean
  xl?: number | 'auto' | boolean
  xl2?: number | 'auto' | boolean
  xl3?: number | 'auto' | boolean
  xl4?: number | 'auto' | boolean
  xl5?: number | 'auto' | boolean
}
