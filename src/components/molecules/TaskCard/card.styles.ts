import styled from 'styled-components'

export const TaskCardWrapper = styled.div`
  border-radius: 8px;
  width: 100%;
  min-height: 208px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.palette.grey[400]};
`
