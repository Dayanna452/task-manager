import { Link } from 'react-router-dom'
import { Tabs } from '../../molecules/Tabs'
import { StyledTab } from '../../atoms/StyledTab'
import { StyledBox } from '../../atoms/StyledBox'
import { LogoIcon } from '../../../icons/LogoIcon'
export interface NavigationProps {
  name: string
  icon: React.ReactElement
}

export interface SidebarProps {
  value: string
  navigation: NavigationProps[]
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const Sidebar = (props: SidebarProps) => {
  const { navigation, value, setValue } = props

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    e.preventDefault()
    setValue(newValue)
  }


  return (
    <Tabs  borderRadius={24} bgColor={c => c.palette.grey[400]}>
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
