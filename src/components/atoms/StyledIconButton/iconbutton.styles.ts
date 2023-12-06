import styled from 'styled-components'

import { IconBtnStyledProps } from './iconbutton.interface'
import { getIconShape, getIconSize } from '../../../functions/iconbutton'

export const IconButtonWrapper = styled.a<IconBtnStyledProps>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: ${({ width, size }) =>
    width
      ? typeof width === 'number'
        ? `${width}px`
        : width
      : size
      ? getIconSize(size)
      : getIconSize('medium')};
  height: ${({ height, size }) =>
    height
      ? typeof height === 'number'
        ? `${height}px`
        : height
      : size
      ? getIconSize(size)
      : getIconSize('medium')};
  border: ${({ theme, borderColor }) =>
    borderColor && `1px solid ${borderColor(theme)}`};
  background-color: ${({ theme, $color: color }) => color && color(theme)};
  border-radius: ${({ shape, borderRadius }) =>
    borderRadius
      ? `${borderRadius}px`
      : shape
      ? getIconShape(shape)
      : getIconShape('rounded')};
  svg {
    fill: ${({ fill, selected, theme }) =>
      selected ? theme.palette.primary[400] : fill};
  }
`
