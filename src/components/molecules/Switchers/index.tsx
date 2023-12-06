import { useTheme } from 'styled-components'

import { MenuLineIcon } from '../../../icons/MenuLineIcon'
import { StyledIconButton } from '../../atoms/StyledIconButton'
import { FunctionLineIcon } from '../../../icons/FunctionLineIcon'
import { useContext } from 'react'
import { SidebarContext } from '../../../contexts/SidebarContext'
import { StyledGrid } from '../../atoms/StyledGrid'

export const Switchers = () => {
  const theme = useTheme()
  const { value, handleChange } = useContext(SidebarContext)
  return (
    <StyledGrid container>
      <StyledIconButton
        fill={theme.palette.grey[200]}
        selected={value === 'dashboard'}
        onClick={e => e && handleChange(e, 'dashboard')}
        icon={FunctionLineIcon}
      />
      <StyledIconButton
        fill={theme.palette.grey[200]}
        selected={value === 'my task'}
        onClick={e => e && handleChange(e, 'my task')}
        icon={MenuLineIcon}
      />
    </StyledGrid>
  )
}
