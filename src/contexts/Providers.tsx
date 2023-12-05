import { ThemeProvider } from "styled-components"
import Theme from "../styles/theme.styles"


interface ProvidersProps{
  children:React.ReactNode
}

export const Providers:React.FC<ProvidersProps> = ({children}) => {
  return (
    <ThemeProvider theme={Theme}>
      {children}
    </ThemeProvider>
  )
}
