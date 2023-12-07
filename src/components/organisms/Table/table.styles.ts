import styled from 'styled-components'
import { StyledBox } from '../../atoms/StyledBox'
import { TableProps } from './table.interface'

export const TableContainer = styled.div<TableProps>`
 // height: calc(100% - 154px);
  display: grid;
  grid-template-columns: 100% 100% 50% 100% 50%;
  overflow-x: auto;
  border-radius: ${({ item }) => !item && '4px'};
  background-color: ${({ theme }) => theme.palette.grey[400]};
 /*  border: ${({ theme, item }) =>
    !item && `1px solid ${theme.palette.grey[300]}`};
  border-top: ${({ theme, item }) =>
    item && `1px solid ${theme.palette.grey[300]}`}; */

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    grid-template-columns: 90% 90% 60% 90% 60%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
    grid-template-columns: 60% 60% 40% 60% 40%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    grid-template-columns: 40% 15% 15% 18% 12%;
  }
`
export const TaskItemsWrapper = styled(StyledBox)`
  border-radius: 4px;
  margin-top: 24px;
  overflow: hidden;
  border: ${({ theme }) => `1px solid ${theme.palette.grey[300]}`};
`
