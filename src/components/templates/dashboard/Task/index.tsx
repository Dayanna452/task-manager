import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

import { StyledAvatar } from '../../../atoms/StyledAvatar'

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
  padding: 8px;
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.common.black};
`

const TextContent = styled.div``

const Icons = styled.div`
  display: flex;
  justify-content: end;
  padding: 2px;
`

export const Task = ({ task, index }: { task: any; index: number }) => {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={{ display: 'flex', justifyContent: 'start', padding: 2 }}>
            <span>
              <small>#{task.id}</small>
            </span>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', padding: 2 }}
          >
            <TextContent>{task.title}</TextContent>
          </div>
          <Icons>
            <div>
              <StyledAvatar
                alt={task.id}
                //onClick={() => console.log(task)}
                src={'https://joesch.moe/api/v1/random?key=' + task.id}
              />
            </div>
          </Icons>
          {/* {provided.placeholder} */}
        </Container>
      )}
    </Draggable>
  )
}
