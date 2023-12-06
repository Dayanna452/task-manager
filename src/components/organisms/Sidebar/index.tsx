import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Tabs } from '../../molecules/Tabs'
import { StyledTab } from '../../atoms/StyledTab'
import { StyledBox } from '../../atoms/StyledBox'
import { LogoIcon } from '../../../icons/LogoIcon'
import { SidebarContext } from '../../../contexts/SidebarContext'
export interface NavigationProps {
  name: string
  icon: React.ReactElement
}
export interface SidebarProps {
  value: string
  navigation: NavigationProps[]
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const Sidebar = () => {
  const { handleChange , value, navigation} = useContext(SidebarContext)

  return (
    <Tabs borderRadius={24} bgColor={c => c.palette.grey[400]}>
      <Link to='/'>
        <StyledBox paddingBottom={36}>
          <LogoIcon />
        </StyledBox>
      </Link>
      {navigation.map((el, idx) => {
        return (
          <StyledTab
            key={idx}
            startIcon={el.icon}
            text={el.name}
            selected={el.name === value}
            onClick={e => handleChange(e, el.name)}
          />
        )
      })}
    </Tabs>
  )
}
