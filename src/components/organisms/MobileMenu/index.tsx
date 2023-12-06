import { useContext } from 'react';

import { Tabs } from '../../molecules/Tabs'
import { StyledTab } from '../../atoms/StyledTab'
import { StyledBox } from '../../atoms/StyledBox'
import {SidebarContext} from '../../../contexts/SidebarContext';

export const MobileMenu = () => {

  const {handleChange,value, navigation}=useContext(SidebarContext)

  return (
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
  )
}
