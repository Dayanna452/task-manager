import { DefaultTheme } from 'styled-components'
import { ThemeType } from '../interfaces/theme.interface'
import { VariantsBadge } from '../components/atoms/StyledBadge/badge.interface'

export const getBgBadge = (
  theme: DefaultTheme,
  bgColor?: (theme: Pick<ThemeType, 'palette'>) => string,
  variant?: VariantsBadge
) => {
  if (variant === 'contained') {
    if (bgColor) {
      return bgColor(theme)
    } else {
      return theme.palette.primary[400]
    }
  } else {
    if (variant === 'translucent') {
      if (bgColor) {
        return `${bgColor(theme)}10`
      } else {
        return `${theme.palette.primary[400]}10`
      }
    }
  }
}
