import { useState } from 'react'

import { MenuLineIcon } from '../icons/MenuLineIcon'
import { Sidebar } from '../components/organisms/Sidebar'
import { FunctionLineIcon } from '../icons/FunctionLineIcon'
import { StyledGrid } from '../components/atoms/StyledGrid'
import { StyledBox } from '../components/atoms/StyledBox'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigation = [
    { name: 'dashboard', icon: <FunctionLineIcon /> },
    { name: 'my task', icon: <MenuLineIcon /> }
  ]
  const [value, setValue] = useState(0)

  return (
    <StyledBox padding={20}>
      <StyledGrid container columnSpacing={4}>
        <StyledGrid xs={4} md={3} lg={2}>
          <Sidebar navigation={navigation} value={value} setValue={setValue} />
        </StyledGrid>
        <StyledGrid xs={8}>
          {children}
        </StyledGrid>
      </StyledGrid>
    </StyledBox>
  )
}
