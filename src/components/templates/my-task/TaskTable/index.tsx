import { TaskBaseProps } from '../../../../interfaces/task.interface'
import { StyledDropdown } from '../../../atoms/StyledDropdown'
import { TableHeader } from '../../../molecules/TableHeader'
import { TableItem } from '../../../molecules/TableItem'
import { TasksCellProps } from '../../../molecules/TaskCell/cell.interface'
import { Table } from '../../../organisms/Table'
import { TaskItemsWrapper } from '../../../organisms/Table/table.styles'

interface CompleteTasks {
  header: TasksCellProps
  items: TaskBaseProps[]
}

interface TaskTableProps {
  columns: string[]
  tasks: CompleteTasks[]
}

export const TaskTable: React.FC<TaskTableProps> = ({ ...props }) => {
  const { columns, tasks } = props

  return (
    <>
      <Table>
        <TableHeader columns={columns} />
      </Table>
      {tasks.map((el, idx) => {
        return (
          <TaskItemsWrapper key={idx}>
            <StyledDropdown {...el}>
              {el.items.map((elem, id) => (
                  <TableItem key={id}{...elem} />
              ))}
            </StyledDropdown>
          </TaskItemsWrapper>
        )
      })}
    </>
  )
}
