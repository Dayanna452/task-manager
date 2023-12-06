import { SizeType } from "../../../interfaces/base.interface"
import { ThemeType } from "../../../interfaces/theme.interface"

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: SizeType
  labelColor?: (theme: Pick<ThemeType, 'palette'>) => string
}
