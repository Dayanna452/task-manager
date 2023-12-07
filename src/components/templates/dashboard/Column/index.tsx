import { Droppable, Draggable } from 'react-beautiful-dnd'

import { TaskColumn } from './column.interface'
import { TaskCard } from '../../../molecules/TaskCard'
import { StyledText } from '../../../atoms/StyledText'
import { TaskColumnWrapper, ColumnBody } from './column.styles'

export const Column: React.FC<TaskColumn> = ({ id, tasks, title }) => {
  return (
    <TaskColumnWrapper>
      <StyledText
        text={title}
        fontSize={18}
        lineHeight={32}
        fontWeight={600}
        letterSpacing={'0.75px'}
        $color={c=>c.palette.grey[200]}
      />
      <Droppable droppableId={id}>
        {droppableProvided => (
          <ColumnBody
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks?.map((task, index) => (
              <Draggable key={task.id||''} draggableId={task.id||''} index={index}>
                {draggableProvided => (
                  <TaskCard
                    ios
                    android
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    {...task}
                  />
                )}
              </Draggable>
            ))}
          </ColumnBody>
        )}
      </Droppable>
    </TaskColumnWrapper>
  )
}
