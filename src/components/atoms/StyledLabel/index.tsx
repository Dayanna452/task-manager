import { Label } from './label.styles'
import { LabelProps } from './label.interface'
import { ThemeType } from '../../../interfaces/theme.interface'

export const StyledLabel: React.FC<LabelProps> = ({
  labelColor,
  size = 'medium',
  ...props
}) => {
  const handleColor = (theme: Pick<ThemeType, 'palette'>) => {
    if (labelColor) {
      return labelColor(theme)
    } else {
      return theme.palette.grey[500]
    }
  }

  return (
    <Label labelColor={handleColor} size={size} {...props}>
      {props.children || 'Label'}
    </Label>
  )
}
