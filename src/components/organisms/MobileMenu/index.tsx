import { StyledBox } from '../../atoms/StyledBox'
import { StyledTab } from '../../atoms/StyledTab'
import { Tabs } from '../../molecules/Tabs'
import { SidebarProps } from '../Sidebar'

export const MobileMenu = (props: SidebarProps) => {
  const { navigation, value, setValue } = props

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    e.preventDefault()
    setValue(newValue)
  }

  return (
    <nav>
      <StyledBox
        width='100%'
        position='fixed'
        bottom={'0px'}
        $display={{ xs: 'block', md: 'none' }}
      >
        <Tabs maxHeight='80px' bgColor={c => c.palette.grey[400]}>
          {navigation.map((el, idx) => {
            return (
              <StyledTab
                navSize={navigation.length}
                flexDirection='column'
                key={idx}
                startIcon={el.icon}
                text={el.name}
                selected={el.name === value}
                onClick={e => handleChange(e, el.name)}
              />
            )
          })}
        </Tabs>
      </StyledBox>
    </nav>
  )
}
