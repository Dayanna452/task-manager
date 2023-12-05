import styled from 'styled-components'
import { TabsContainerProps } from './tabs.interface'

export const StyledTabs = styled.div<TabsContainerProps>`
  height: ${({ height }) => height || 'auto'};
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  column-gap: ${({ columnGap }) => `${columnGap}px` || '8px'};
  flex-direction: column;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor(theme) : 'transparent'};
  border-radius: ${({ borderRadius }) => `${borderRadius}px` || 0};
  //border-radius: ;
`
