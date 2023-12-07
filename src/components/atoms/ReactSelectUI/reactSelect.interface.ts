import type { Props as ReactSelectProps } from 'react-select'
import { SizeType } from '../../../interfaces/base.interface'
import { ThemeType } from '../../../interfaces/theme.interface'

export interface MultiSelectUIProps extends Omit<ReactSelectProps, 'theme'> {
  size?: SizeType
  hiddenLabel?: boolean
  label?: string
  fullWidth?: boolean
  startIcon?:string
  border?: boolean
  calendar?:boolean
  labelColor?: (theme: Pick<ThemeType, 'palette'>) => string
  borderColor?: (theme: Pick<ThemeType, 'palette'>) => string
  shadow?: boolean
  creatable?: boolean
  onCreateOption?: (value: string) => void
  maxMenuHeight?: number
}
