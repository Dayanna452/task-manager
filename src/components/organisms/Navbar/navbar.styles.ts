import styled from 'styled-components'

export const NavBarWrapper = styled.nav`
  width: 100%;
  border-radius: 16px;
  padding: 10px 10px 0px;
  svg {
    fill: ${({ theme }) => theme.palette.grey[200]};
  }
  background-color: transparent;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 12px 24px;

    background-color: ${({ theme }) => theme.palette.grey[400]};
  }
`
