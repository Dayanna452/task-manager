import { ThemeProvider } from '@mui/material'

import theme from '../styles/theme'
import { ThemeContext } from './ThemeContext'

interface ProvidersProps{
  children:React.ReactNode
}

export const Providers:React.FC<ProvidersProps> = ({children}) => {
  return (
    <ThemeProvider theme={theme} /*  value={{}} */>{children}</ThemeProvider>
  )
}
