import { ShapeType, SizeType } from "../../../interfaces/base.interface"
import { ThemeType } from "../../../interfaces/theme.interface"

export interface InputUIProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  size?: SizeType
  border?: boolean
  shadow?: boolean
  shape?: ShapeType
  fullWidth?: boolean
  hiddenLabel?: boolean
  labelColor?: (theme: Pick<ThemeType, 'palette'>) => string
  borderColor?: (theme: Pick<ThemeType, 'palette'>) => string
}
