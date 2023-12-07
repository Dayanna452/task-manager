import { useContext, useEffect, useState } from 'react'

import { Modal } from '../../../components/molecules/Modal'
import { StyledGrid } from '../../../components/atoms/StyledGrid'
import { StyledInput } from '../../../components/atoms/StyledInput'
import { StyledButton } from '../../../components/atoms/StyledButton'
import { ReactSelectUI } from '../../../components/atoms/ReactSelectUI'
import { TaskCardProps } from '../../../components/molecules/TaskCard/card.interface'

import tag from '../../../assets/tag.svg'
import square from '../../../assets/square.svg'
import assign from '../../../assets/assign.svg'
import estimate from '../../../assets/estimate.svg'
import calendar from '../../../assets/calendar.svg'
import moment from 'moment'
import { useUsers } from '../../../hooks/useUser'
import { TaskContext } from '../../../contexts/TaskContext'
import { PointEstimate, Status, TaskTag } from '../../../models/task'

interface AddTask {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddTaskModal = ({ ...props }: AddTask) => {
  const { open, setOpen } = props
  const { data: users } = useUsers()
  const [taskData, setTaskData] = useState<TaskCardProps>({
    name: '',
    pointEstimate: 'EIGHT',
    status: 'TODO',
    tags: []
  })
  const { createTask } = useContext(TaskContext)

  const [newUsers, setNewUsers] = useState<any[]>([])
  const points = [
    { value: 'ZERO', label: '0 Points', icon: estimate },
    { value: 'ONE', label: '01 Points', icon: estimate },
    { value: 'TWO', label: '02 Points', icon: estimate },
    { value: 'FOUR', label: '04 Points', icon: estimate },
    { value: 'EIGHT', label: '08 Points', icon: estimate }
  ]
  const tags = [
    { value: 'ANDROID', label: 'Android', icon: square },
    { value: 'IOS', label: 'IOS', icon: square }
  ]
  const getUsers = () =>
    users?.users?.map(el =>
      newUsers.push({ value: el.email, label: el.fullName, icon: assign })
    )

  const assigneePearson = users?.users?.find(
    el => el.fullName === taskData.assign?.fullName
  )

  const handleCreateTast = () => {
    createTask({
      dueDate: taskData.dueDate as Date,
      name: taskData.name,
      pointEstimate: taskData.pointEstimate as PointEstimate,
      tags: taskData.tags as TaskTag[],
      assigneeId: assigneePearson?.id,
      status: taskData.status as Status
    })
    setOpen(false)
  }

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users])

  return (
    <Modal width={800} open={open} onClose={() => setOpen(false)}>
      <StyledGrid container $spacing={2}>
        <StyledGrid xs={12}>
          <StyledInput
            placeholder='Task title'
            fullWidth
            value={taskData.name}
            onChange={e => setTaskData({ ...taskData, name: e.target.value })}
          />
        </StyledGrid>
        <StyledGrid xs={3}>
          <ReactSelectUI
            fullWidth
            hiddenLabel
            startIcon={estimate}
            placeholder='Estimate'
            value={taskData.pointEstimate}
            onChange={(e: any) =>
              setTaskData({ ...taskData, pointEstimate: e.value })
            }
            options={points}
          />
        </StyledGrid>
        <StyledGrid xs={3}>
          <ReactSelectUI
            fullWidth
            hiddenLabel
            placeholder='Assign'
            startIcon={assign}
            value={taskData.assign?.fullName}
            onChange={(e: any) =>
              setTaskData({
                ...taskData,
                assign: {
                  fullName: e.label,
                  email: e.label
                }
              })
            }
            options={newUsers}
          />
        </StyledGrid>
        <StyledGrid xs={3}>
          <ReactSelectUI
            fullWidth
            isMulti
            hiddenLabel
            placeholder='Label'
            value={taskData.tags}
            startIcon={tag}
            onChange={(e: any) => setTaskData({ ...taskData, tags: e.value })}
            options={tags}
          />
        </StyledGrid>
        <StyledGrid xs={3}>
          <ReactSelectUI
            fullWidth
            isMulti
            hiddenLabel
            calendar
            placeholder={
              (moment(taskData.dueDate).format('L') as any) || 'Due date'
            }
            startIcon={calendar}
            value={taskData.dueDate}
            onChange={(e: any) => setTaskData({ ...taskData, dueDate: e })}
          />
        </StyledGrid>
        <StyledGrid xs={12}>
          <StyledGrid container justifyContent={'flex-end'} style={{ gap: 10 }}>
            <StyledButton
              variant='text'
              style={{ color: '#fff' }}
              text={'Cancel'}
              onClick={() => setOpen(false)}
            />
            <StyledButton text={'Create'} onClick={() => handleCreateTast()} />
          </StyledGrid>
        </StyledGrid>
      </StyledGrid>
    </Modal>
  )
}
