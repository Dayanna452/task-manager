import styled from 'styled-components'
import { BoxProps } from './box.interface'

export const BoxWrapper = styled.div<BoxProps>`
  padding: ${({ padding }) => `${padding}px` || 0};
  padding-left: ${({ paddingLeft }) => `${paddingLeft}px` || 0};
  padding-right: ${({ padddingRight }) => `${padddingRight}px` || 0};
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}px` || 0};
  padding-top: ${({ paddingTop }) => `${paddingTop}px` || 0};
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor(theme) : 'transparent'};
`
