import { BreakpointSizesType } from '../../../@types/base.type'
import {
  BaseColorType,
  ButtonShapeType,
  ButtonVariantType,
  SizeType
} from '../../../interfaces/base.interface'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  size?: SizeType
  loading?: boolean
  fullWidth?: boolean
  color?: BaseColorType
  shape?: ButtonShapeType
  sx?: React.CSSProperties
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
  variant?: ButtonVariantType
  fontWeight?: string | number
  btnRef?: React.MutableRefObject<any>
  fontSize?: number | BreakpointSizesType
}
