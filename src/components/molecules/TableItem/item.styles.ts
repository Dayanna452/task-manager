import styled from 'styled-components'
import { StyledBox } from '../../atoms/StyledBox'

export const TaskItemWrapper = styled(StyledBox)`
  height: 48px;
  padding: 4px 16px;
  background-color: ${({theme})=>theme.palette.grey[400]};
  border: ${({ theme }) => `1px solid ${theme.palette.grey[300]}`};
  border-top: ${({ theme }) => `1px solid ${theme.palette.grey[300]}`};
`
