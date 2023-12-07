import styled from 'styled-components'

import { StyledBox } from '../../atoms/StyledBox'

export const HeaderWrapper = styled(StyledBox)`
  border: ${({ theme }) => `1px solid ${theme.palette.grey[300]}`};
`

export const ColumnItem = styled(StyledBox)`
  border-right: ${({ theme }) => `1px solid ${theme.palette.grey[300]}`};
  padding: 4px 16px;
  height: 48px;
  display: flex;
  align-items: center;

  &:last-child {
    border-right: none;
  }
`
