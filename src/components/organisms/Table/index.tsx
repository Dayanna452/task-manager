import { TableProps } from './table.interface'
import { TableContainer } from './table.styles'

export const Table: React.FC<TableProps> = ({ ...props }) => {
  const { children } = props

  return (
    <TableContainer {...props}>
      {children}
    </TableContainer>
  )
}
