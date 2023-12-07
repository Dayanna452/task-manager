import styled, { css } from 'styled-components'

import { StyledBox } from '../StyledBox'
import { DropdownProps } from './dropdown.interface'

export const DropdownWrapper = styled(StyledBox)<DropdownProps>`
  height: ${({ open }) => (open ? 'fit-content' : '70')};
`

export const DropDownList = styled(StyledBox)<DropdownProps>`
  display: none;
  animation: slideaway 600ms;

  @keyframes slideaway {
    from {
      display: block;
    }
    to {
      transform: translateY(-2px);
      opacity: 1;
    }
  }

  ${({ open }) =>
    open &&
    css`
      display: block;
      animation: slideaway2 600ms;

      @keyframes slideaway2 {
        from {
          display: none;
        }
        to {
          transform: translateY(2px);
          opacity: 1;
        }
      }
    `}
`
