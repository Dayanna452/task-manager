import { GridUIProps } from './grid.interface'
import { GridWrapper } from './grid.styles'

export const StyledGrid = ({ columns = 12, ...props }: GridUIProps) => {
  return (
    <GridWrapper columns={columns} {...props}>
      {props.children}
    </GridWrapper>
  )
}
