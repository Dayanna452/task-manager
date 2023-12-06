import styled from 'styled-components'

export const StyledMobileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.palette.grey[200]};
  }
`
