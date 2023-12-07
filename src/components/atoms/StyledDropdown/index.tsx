import { useState } from 'react'

import { StyledBox } from '../StyledBox'
import { DropDownList } from './dropdown.styles'
import { TaskCell } from '../../molecules/TaskCell'
import { DropdownProps } from './dropdown.interface'

export const StyledDropdown = (props: DropdownProps) => {
  const { children, header } = props
  const [open, setOpen] = useState(true)

  return (
    <StyledBox>
      <TaskCell
        quantity={header?.quantity || 0}
        title={header?.title || ''}
        onClick={() => setOpen(!open)}
      />
      <DropDownList open={open}>{children}</DropDownList>
    </StyledBox>
  )
}
