import styled, { css } from 'styled-components'
import { BoxProps } from './box.interface'
import { getGridDisplay } from '../../../functions/grid.function'
import { getPadding, getPosition } from '../../../functions/box.function'

export const BoxWrapper = styled.div<BoxProps>`
  position: ${({ position }) =>
    typeof position === 'string' ? getPosition(position) : 'static'};
  padding-left: ${({ paddingLeft }) => `${paddingLeft}px` || 0};
  padding-right: ${({ padddingRight }) => `${padddingRight}px` || 0};
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}px` || 0};
  padding-top: ${({ paddingTop }) => `${paddingTop}px` || 0};
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor(theme) : 'transparent'};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => `${borderRadius}px` || 0};

  //Padding
  padding: ${({ padding }) => getPadding(padding, 'xs')};

  ${({ padding }) =>
    typeof padding === 'object' &&
    padding.xs2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        padding: ${getPadding(padding, 'xs2')};
      }
    `}

  ${({ padding }) =>
    typeof padding === 'object' &&
    padding.sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        padding: ${getPadding(padding, 'sm')};
      }
    `}

${({ padding }) =>
    typeof padding === 'object' &&
    padding.sm2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        padding: ${getPadding(padding, 'sm2')};
      }
    `}

${({ padding }) =>
    typeof padding === 'object' &&
    padding.md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${getPadding(padding, 'md')};
      }
    `}

${({ padding }) =>
    typeof padding === 'object' &&
    padding.md2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        padding: ${getPadding(padding, 'md2')};
      }
    `}
${({ padding }) =>
    typeof padding === 'object' &&
    padding.lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        padding: ${getPadding(padding, 'lg')};
      }
    `}
${({ padding }) =>
    typeof padding === 'object' &&
    padding.lg2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        padding: ${getPadding(padding, 'lg2')};
      }
    `}
${({ padding }) =>
    typeof padding === 'object' &&
    padding.xl &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        padding: ${getPadding(padding, 'xl')};
      }
    `}
${({ padding }) =>
    typeof padding === 'object' &&
    padding.xl2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        padding: ${getPadding(padding, 'xl2')};
      }
    `}
${({ padding }) =>
    typeof padding === 'object' &&
    padding.xl3 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        padding: ${getPadding(padding, 'xl3')};
      }
    `}
${({ padding }) =>
    typeof padding === 'object' &&
    padding.xl4 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        padding: ${getPadding(padding, 'xl4')};
      }
    `}
${({ padding }) =>
    typeof padding === 'object' &&
    padding.xl5 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        padding: ${getPadding(padding, 'xl5')};
      }
    `}

  // Position
  position: ${({ position }) => getPosition(position, 'xs')};

  ${({ position }) =>
    typeof position === 'object' &&
    position.xs2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        position: ${getPosition(position, 'xs2')};
      }
    `}

  ${({ position }) =>
    typeof position === 'object' &&
    position.sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        position: ${getPosition(position, 'sm')};
      }
    `}

${({ position }) =>
    typeof position === 'object' &&
    position.sm2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        position: ${getPosition(position, 'sm2')};
      }
    `}

${({ position }) =>
    typeof position === 'object' &&
    position.md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: ${getPosition(position, 'md')};
      }
    `}

${({ position }) =>
    typeof position === 'object' &&
    position.md2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        position: ${getPosition(position, 'md2')};
      }
    `}
${({ position }) =>
    typeof position === 'object' &&
    position.lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        position: ${getPosition(position, 'lg')};
      }
    `}
${({ position }) =>
    typeof position === 'object' &&
    position.lg2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        position: ${getPosition(position, 'lg2')};
      }
    `}
${({ position }) =>
    typeof position === 'object' &&
    position.xl &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        position: ${getPosition(position, 'xl')};
      }
    `}
${({ position }) =>
    typeof position === 'object' &&
    position.xl2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        position: ${getPosition(position, 'xl2')};
      }
    `}
${({ position }) =>
    typeof position === 'object' &&
    position.xl3 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        position: ${getPosition(position, 'xl3')};
      }
    `}
${({ position }) =>
    typeof position === 'object' &&
    position.xl4 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        position: ${getPosition(position, 'xl4')};
      }
    `}
${({ position }) =>
    typeof position === 'object' &&
    position.xl5 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        position: ${getPosition(position, 'xl5')};
      }
    `}

  // Display
  display: ${({ $display: display }) => getGridDisplay(display, 'xs')};

  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.xs2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        display: ${getGridDisplay(display, 'xs2')};
      }
    `}

  ${({ $display: display }) =>
    typeof display === 'object' &&
    display.sm &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        display: ${getGridDisplay(display, 'sm')};
      }
    `}

${({ $display: display }) =>
    typeof display === 'object' &&
    display.sm2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        display: ${getGridDisplay(display, 'sm2')};
      }
    `}

${({ $display: display }) =>
    typeof display === 'object' &&
    display.md &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: ${getGridDisplay(display, 'md')};
      }
    `}

${({ $display: display }) =>
    typeof display === 'object' &&
    display.md2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        display: ${getGridDisplay(display, 'md2')};
      }
    `}
${({ $display: display }) =>
    typeof display === 'object' &&
    display.lg &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        display: ${getGridDisplay(display, 'lg')};
      }
    `}
${({ $display: display }) =>
    typeof display === 'object' &&
    display.lg2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        display: ${getGridDisplay(display, 'lg2')};
      }
    `}
${({ $display: display }) =>
    typeof display === 'object' &&
    display.xl &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        display: ${getGridDisplay(display, 'xl')};
      }
    `}
${({ $display: display }) =>
    typeof display === 'object' &&
    display.xl2 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        display: ${getGridDisplay(display, 'xl2')};
      }
    `}
${({ $display: display }) =>
    typeof display === 'object' &&
    display.xl3 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        display: ${getGridDisplay(display, 'xl3')};
      }
    `}
${({ $display: display }) =>
    typeof display === 'object' &&
    display.xl4 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopM}) {
        display: ${getGridDisplay(display, 'xl4')};
      }
    `}
${({ $display: display }) =>
    typeof display === 'object' &&
    display.xl5 &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
        display: ${getGridDisplay(display, 'xl5')};
      }
    `}
`
