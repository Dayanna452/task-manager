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
  position: relative;
`

export const TaskOptions = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 8px;
  gap: 10px;
  border: ${({ theme }) => `1px solid ${theme.palette.grey[200]}`};
  background-color: ${({ theme }) => theme.palette.grey[300]};
`
