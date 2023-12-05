import { Link } from 'react-router-dom'
import { LogoIcon } from '../../../icons/LogoIcon'
import { StyledButton } from '../../atoms/StyledButton'
import { Tabs } from '../../molecules/Tabs'
import { StyledTab } from '../../atoms/StyledTab'
import { StyledGrid } from '../../atoms/StyledGrid'
import { StyledBox } from '../../atoms/StyledBox'
interface NavigationProps {
  name: string
  icon: React.ReactElement
}

interface SidebarProps {
  value: number
  navigation: NavigationProps[]
  setValue: React.Dispatch<React.SetStateAction<number>>
}

export const Sidebar = (props: SidebarProps) => {
  const { navigation, value, setValue } = props

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  function a11yProps (index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`
    }
  }

  return (
    <Tabs height='88vh' borderRadius={24} bgColor={c => c.palette.grey[400]}>
      <Link to='/'>
        <StyledBox paddingBottom={36}>
          <LogoIcon />
        </StyledBox>
      </Link>
      {navigation.map((el, idx) => {
        return <StyledTab key={idx} startIcon={el.icon} text={el.name} />
      })}
    </Tabs>
  )
}
/*
<ul
 value={value}
  textColor='primary'
  variant='scrollable'
  orientation='vertical'
  onChange={handleChange}
  aria-label='Vertical tabs example'
  sx={{ flexGrow: 1, display: 'flex' }} 
>   {navigation.map((el, idx) => {
    return (
      <li
        key={idx}
         icon={el.icon}
        label={el.name}
        iconPosition='start'
        {...a11yProps(idx)} 
      />
    )
  })}
</ul>    <TabPanel value={value} index={0}>
  Item One
</TabPanel>
<TabPanel value={value} index={1}>
  Item Two
</TabPanel> */
