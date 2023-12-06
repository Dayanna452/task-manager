import styled, { css } from 'styled-components'

import { TextProps } from './text.interface'

export const TextStyled = styled('span')<TextProps>`
  text-align: ${({ textAlign }) =>
    typeof textAlign === 'string' ? textAlign : textAlign?.xs};
  color: ${({ $color: color, theme }) => color && color(theme)};
  text-transform: ${({ textTransform }) => textTransform};
  font-weight: ${({ fontWeight }) =>
    typeof fontWeight === 'number' || typeof fontWeight === 'string'
      ? fontWeight
      : fontWeight?.xs};
  letter-spacing: ${({ letterSpacing }) => letterSpacing && letterSpacing};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) =>
    typeof lineHeight !== 'string'
      ? typeof lineHeight === 'number'
        ? `${lineHeight}px`
        : `${lineHeight?.xs}px`
      : 'normal'};
  text-decoration: ${({ textDecoration }) => textDecoration && textDecoration};
  ${({ theme, lineHeight }) =>
    typeof lineHeight !== 'number' &&
    css`
      @media (min-width: ${theme.breakpoints.mobileXL}) {
        line-height: ${lineHeight?.sm && `${lineHeight.sm}px`};
      }
      @media (min-width: ${theme.breakpoints.tabletM}) {
        line-height: ${lineHeight?.md && `${lineHeight.md}px`};
      }
      @media (min-width: ${theme.breakpoints.laptopM}) {
        line-height: ${lineHeight?.lg && `${lineHeight.lg}px`};
      }
      @media (min-width: ${theme.breakpoints.desktop}) {
        line-height: ${lineHeight?.xl && `${lineHeight.xl}px`};
      }
    `}
`
