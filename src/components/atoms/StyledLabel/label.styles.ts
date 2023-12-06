import styled from 'styled-components'
import { LabelProps } from './label.interface'
import { getInputFontSize } from '../../../functions/input.function'

export const Label = styled.label<LabelProps>`
  font-weight: 700;
  font-size: ${({ size='small' }) => getInputFontSize(size)};
  color: ${({ theme, labelColor }) => labelColor && labelColor(theme)};
`
