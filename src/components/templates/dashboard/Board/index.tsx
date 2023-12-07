import { useState, useEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { Column } from '../Column'
import { StyledList } from './board.styles'
import { TaskBoardProps } from './board.interface'
import { initialData } from '../../../../utils/constans'
import { reorder, separateTitle } from '../../../../utils/task'

export const Board: React.FC<TaskBoardProps> = ({ ...props }) => {
  const { colsOrder, tasks, tasksState } = props

  const [dataTasks, setDataTasks] = useState(initialData(colsOrder))

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result
    // If it is dropped in an unknown destination
    if (destination === null || destination === undefined) return

    // If it is drag and drop back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return

    // If the card is drop in the same column but in a different position

    const sourceCol = dataTasks.columns[source.droppableId]
    const destinationCol = dataTasks.columns[destination.droppableId]

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorder(sourceCol, source.index, destination.index)

      const newState = {
        ...dataTasks,
        columns: {
          ...dataTasks.columns,
          [newColumn.id]: newColumn
        }
      }
      setDataTasks(newState)
      return
    }

    // If the card is move from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds)
    const [removed] = startTaskIds.splice(source.index, 1)
    const newStartColumn = {
      ...sourceCol,
      taskIds: startTaskIds,
      title: `${separateTitle(sourceCol.title)}(${startTaskIds.length})`
    }

    const endTasksIds = Array.from(destinationCol.taskIds)
    endTasksIds.splice(destination.index, 0, removed)
    const newEndColumn = {
      ...destinationCol,
      taskIds: endTasksIds,
      title: `${separateTitle(destinationCol.title)}(${endTasksIds.length})`
    }

    const newState = {
      ...dataTasks,
      columns: {
        ...dataTasks.columns,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn
      }
    }

    setDataTasks(newState)
  }

  useEffect(() => {
    const columns = dataTasks.columns
    const toDo = tasksState.TODO
    const inProgress = tasksState.IN_PROGRESS
    const done = tasksState.DONE

    setDataTasks({
      ...dataTasks,
      tasks,
      columns: {
        ...columns,
        TODO: {
          ...columns.TODO,
          title: `Working (${toDo.length})`,
          taskIds: toDo
        },
        IN_PROGRESS: {
          ...columns.IN_PROGRESS,
          title: `In Progress (${inProgress.length})`,
          taskIds: inProgress
        },
        DONE: {
          ...columns.DONE,
          title: `Completed (${done.length})`,
          taskIds: done
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks])

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StyledList>
        {dataTasks.colsOrder?.map((columnId: any) => {
          const column = dataTasks.columns[columnId]
          const tasks = column.taskIds.map(
            (taskId: any) => dataTasks.tasks[taskId]
          )
          return (
            <Column
              tasks={tasks}
              id={column.id}
              key={column.id}
              title={column.title}
            />
          )
        })}
      </StyledList>
    </DragDropContext>
  )
}
