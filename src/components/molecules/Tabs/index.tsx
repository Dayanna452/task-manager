import { TabsProps } from './tabs.interface'
import { StyledTabs } from './tabs.styles'

export const Tabs: React.FC<TabsProps> = ({ children, ...props }) => {
  return <StyledTabs {...props}>{children}</StyledTabs>
}
