//Components
import { Navbar } from '../components/organisms/Navbar'
import { Sidebar } from '../components/organisms/Sidebar'
import { StyledBox } from '../components/atoms/StyledBox'
import { StyledGrid } from '../components/atoms/StyledGrid'
import { MobileMenu } from '../components/organisms/MobileMenu'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <StyledBox padding={{ xs: 0, md: 32 }}>
      <StyledGrid container columnSpacing={{ xs: 0, md: 4 }}>
        <MobileMenu
        />
        <StyledGrid
          xs={5}
          $display={{ xs: 'none', md: 'block' }}
          md={3.5}
          lg={2.5}
          xl={2}
          xl3={1.7}
          xl4={1.4}
        >
          <Sidebar />
        </StyledGrid>
        <StyledGrid xs={12} md={8.5} lg={9.5} xl={10}>
          <Navbar />
          {children}
        </StyledGrid>
      </StyledGrid>
    </StyledBox>
  )
}
