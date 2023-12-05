import styled from 'styled-components'

import { TabContainerProps } from './tab.interface'
import { getTabPadding } from '../../../functions/tab.function'

export const TabStyled = styled.button<TabContainerProps>`
  gap: 10px;
  display: flex;
  cursor: pointer;
  width: ${({ navSize }) => (navSize ? `${100 / navSize}%` : '100%')};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  padding: ${({ size = 'medium' }) => getTabPadding(size)};
  align-items: center;
  text-transform: capitalize;
  font-size: 13px;
  background: transparent;
  color: ${({ theme, selected }) =>
    selected ? theme.palette.primary[400] : theme.palette.grey[200]};
  svg {
    fill: ${({ theme, selected }) =>
      selected ? theme.palette.primary[400] : 'currentColor'};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary[400]};
    svg {
      fill: ${({ theme }) => theme.palette.primary[400]};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-transform: uppercase;
    justify-content: start;
    font-size: 15px;
    width: 100%;
    border-right: ${({ theme, selected }) =>
      selected && `3px solid ${theme.palette.primary[400]}`};
    background: ${({ selected }) =>
      selected
        ? 'linear-gradient(90deg, rgba(186, 37, 37, 0) 0%,rgba(210, 77, 77, 0.1) 100%)'
        : 'transparent'};
  }
`
