import { Box, Grid } from '@mui/material'

import SwipeableTemporaryDrawer from '../components/organisms/Sidebar'

interface MainLayoutProps{
  children:React.ReactNode
}

export const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <SwipeableTemporaryDrawer/>
        </Grid>
        <Grid item xs={8}>content</Grid>
      </Grid>
      <header>
        header
      </header>
        {children}
      <footer>
        footer
      </footer>
    </Box>
  )
}
