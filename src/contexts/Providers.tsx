import { ThemeProvider } from 'styled-components'

import Theme from '../styles/theme.styles'

import SearchBarContext from './SearchBarContext'
import SidebarContext from './SidebarContext'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <SidebarContext.Provider>
        <SearchBarContext.Provider>{children}</SearchBarContext.Provider>
      </SidebarContext.Provider>
    </ThemeProvider>
  )
}
