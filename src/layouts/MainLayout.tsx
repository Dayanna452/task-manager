import { useState } from 'react'

import { MenuLineIcon } from '../icons/MenuLineIcon'
import { Sidebar } from '../components/organisms/Sidebar'
import { StyledBox } from '../components/atoms/StyledBox'
import { StyledGrid } from '../components/atoms/StyledGrid'
import { FunctionLineIcon } from '../icons/FunctionLineIcon'
import { MobileMenu } from '../components/organisms/MobileMenu'
import { PlusIcon } from '../icons/PlusIcon'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigationMobile = [
    { name: 'dashboard', icon: <FunctionLineIcon /> },
    { name: 'add project', icon: <PlusIcon /> },
    { name: 'my task', icon: <MenuLineIcon /> }
  ]
  const navigation = [navigationMobile[0], navigationMobile[2]]

  const [value, setValue] = useState(navigationMobile[0].name)

  return (
    <StyledBox padding={{ xs: 0, md: 32 }}>
      <StyledGrid container columnSpacing={{ xs: 0, md: 4 }}>
        <MobileMenu navigation={navigationMobile} value={value} setValue={setValue} />
        <StyledGrid
          xs={5}
          $display={{ xs: 'none', md: 'block' }}
          md={3.5}
          lg={2}
        >
          <Sidebar navigation={navigation} value={value} setValue={setValue} />
        </StyledGrid>
        <StyledGrid xs={12} md={9.5} lg={10}>
          {children}
        </StyledGrid>
      </StyledGrid>
    </StyledBox>
  )
}
