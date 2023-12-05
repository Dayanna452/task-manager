import styled from 'styled-components'
import { TabsContainerProps } from './tabs.interface'

export const StyledTabs = styled.div<TabsContainerProps>`
  height: ${({ height }) => height || `calc(100vh - 64px);`};
  max-height: ${({ maxHeight }) => maxHeight};
  padding: ${({ padding }) => padding || 0};
  width: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  column-gap: ${({ columnGap }) => `${columnGap}px` || '8px'};
  flex-direction: row;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor(theme) : 'transparent'};
  border-radius: ${({ borderRadius }) => `${borderRadius}px` || 0};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ padding }) => padding || '12px 0'};
    flex-direction: column;
  }

`
