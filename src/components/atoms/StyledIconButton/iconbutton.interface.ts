import {
  IconProps,
  ShapeType,
  SizeType
} from '../../../interfaces/base.interface'
import { ThemeType } from '../../../interfaces/theme.interface'

export interface IconButtonProps {
  cn?: string
  fill?: string
  href?: string
  selected?: boolean
  iconButtonRef?:
    | ((instance: HTMLAnchorElement | null) => void)
    | React.RefObject<HTMLAnchorElement>
    | null
    | undefined
  width?: number | string
  height?: number | string
  size?: SizeType
  $iconSize?: number
  shape?: ShapeType
  onClick?: (e?: React.SyntheticEvent) => void
  borderRadius?: number
  sx?: React.CSSProperties
  icon: React.FC<IconProps>
  $color?: (theme: Pick<ThemeType, 'palette'>) => string
  borderColor?: (theme: Pick<ThemeType, 'palette'>) => string
}

export type IconBtnStyledProps = Omit<IconButtonProps, 'icon' | 'onClick'>
