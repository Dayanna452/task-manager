import { ThemeType } from '../../../interfaces/theme.interface'
import { BreakpointSizesType, HtmlTags } from '../../../@types/base.type'

export interface TextProps
  extends React.BaseHTMLAttributes<HTMLHeadingElement> {
  tag?: HtmlTags
  html?: boolean
  letterSpacing?: string
  textAlign?: string | BreakpointSizesType
  lineHeight?: number | BreakpointSizesType
  textTransform?: string
  textDecoration?: string
  sx?: React.CSSProperties
  text?: React.ReactNode
  fontWeight?: string | number | BreakpointSizesType
  fontSize?: number | string | BreakpointSizesType
  $color?: (theme: Pick<ThemeType, 'palette'>) => string
}

export type TextStyledProps = Omit<TextProps, 'cn' | 'sx'>
