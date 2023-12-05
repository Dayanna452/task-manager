import styled from 'styled-components'

import { TabContainerProps } from './tab.interface'
import { getButtonPadding } from '../../../functions/button.function'

export const TabStyled = styled.button<TabContainerProps>`
  gap: 10px;
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  padding: ${({ size = 'medium' }) => getButtonPadding(size)};
  justify-content: start;
  text-transform: uppercase;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.grey[200]};

  &:hover {
    color: ${({ theme }) => theme.palette.primary[400]};
  }
`
