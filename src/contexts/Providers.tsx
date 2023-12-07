import { ThemeProvider } from 'styled-components'

import Theme from '../styles/theme.styles'

import SearchBarContext from './SearchBarContext'
import SidebarContext from './SidebarContext'
import TaskContext from './TaskContext'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../services/apollo.services'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={Theme}>
        <SidebarContext.Provider>
          <SearchBarContext.Provider>
            <TaskContext.Provider>{children}</TaskContext.Provider>
          </SearchBarContext.Provider>
        </SidebarContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  )
}
