import { BreakpointSizesType, Sizes } from "../../../@types/base.type"
import { ShapeType } from "../../../interfaces/base.interface"
import { ThemeType } from "../../../interfaces/theme.interface"

export type VariantsBadge = 'contained' | 'outlined' | 'translucent'

export interface BadgeProps {
  size?: Sizes
  fontWeight?: number
  shape?: ShapeType
  fontSize?: number | BreakpointSizesType
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  fullWidth?: boolean
  sx?: React.CSSProperties
  text?: string | number
  gap?: number
  $color?: (theme: Pick<ThemeType, 'palette'>) => string
  variant?: VariantsBadge
  bgColor?: (theme: Pick<ThemeType, 'palette'>) => string
}
