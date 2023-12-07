import { useContext } from 'react'

import { Tabs } from '../../molecules/Tabs'
import { MobileNav } from './mobile.styles'
import { StyledTab } from '../../atoms/StyledTab'
import { SidebarContext } from '../../../contexts/SidebarContext'

export const MobileMenu = () => {
  const { handleChange, value, navigationMobile } = useContext(SidebarContext)

  return (
    <MobileNav
      width='100%'
      position='fixed'
      bottom={'0px'}
    >
      <Tabs maxHeight='80px' bgColor={c => c.palette.grey[400]}>
        {navigationMobile.map((el, idx) => {
          return (
            <StyledTab
              key={idx}
              text={el.name}
              startIcon={el.icon}
              flexDirection='column'
              selected={el.name === value}
              navSize={navigationMobile.length}
              onClick={e => handleChange(e, el.name)}
            />
          )
        })}
      </Tabs>
    </MobileNav>
  )
}
