import styled from 'styled-components'

import { StyledBox } from '../../atoms/StyledBox'

export const MobileNav = styled(StyledBox)`
  z-index: 1000;
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`
