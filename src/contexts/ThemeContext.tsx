import { createContext, useMemo } from 'react'
import * as locales from '@mui/material/locale'
import { createTheme, ThemeProvider } from '@mui/material'

import theme from '../styles/theme'


interface Props{
  th?:any
}

export const ThemeContext = createContext({} as Props)

const Provider = ({ children }:{children?:React.ReactNode}) => {
  const th = useMemo(
    () => createTheme(theme, locales['esES']),
    []
  )

  return (
    <ThemeContext.Provider value={{th}}>
      <ThemeProvider theme={th}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

const Consumer = ThemeContext.Consumer
const themes = { Consumer, Provider }
export { Consumer, Provider }
export default themes
