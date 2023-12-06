import styled from 'styled-components'

import { BadgeProps } from './badge.interface'
import {
  getButtonPadding,
  getButtonShape
} from '../../../functions/button.function'
import { getBgBadge } from '../../../functions/badge.function'

export const BadgeStyled = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  gap: ${({ gap, startIcon, endIcon }) =>
    gap ? `${gap}px` : (startIcon || endIcon) && '10px'};
  justify-content: center;
  border-radius: ${({ shape }) =>
    shape ? getButtonShape(shape) : getButtonShape('pill')};
  padding: ${({ size }) => size && getButtonPadding(size)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  border: ${({ bgColor, theme, variant }) =>
    variant === 'outlined' && bgColor && `1px solid ${bgColor(theme)}`};
  background-color: ${({ bgColor, variant, theme }) =>
    getBgBadge(theme, bgColor, variant)};
  svg {
    fill: ${({ theme, $color }) => $color && $color(theme)};
  }
`
