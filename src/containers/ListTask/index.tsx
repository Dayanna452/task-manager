import { TaskTable } from '../../components/templates/my-task/TaskTable'
import { StyledBox } from '../../components/atoms/StyledBox'

export const ListTask = () => {
  const cols = [
    '#task name',
    'task tags',
    'estimate',
    'tag assign name',
    'due date'
  ]

  const task = [
    {
      header: { quantity: 5, title: 'to do' },
      items: [
        {
          title: 'num 1',
          assignTo: 'lady',
          points: 4,
          tags: ['ios', 'android'],
          date: '06/12/2023',
          comments: 3,
          nodes: 2
        },
        {
          title: 'num 2',
          assignTo: 'lady',
          points: 3,
          tags: ['ios', 'android'],
          date: '06/12/2023',
          comments: 3,
          nodes: 2
        },
        {
          title: 'num 3',
          assignTo: 'lady',
          points: 3,
          tags: ['ios', 'android'],
          date: '06/12/2023',
          comments: 3,
          nodes: 2
        }
      ]
    },
    {
      header: { quantity: 4, title: 'in progress' },
      items: [
        {
          title: 'num 1',
          assignTo: 'lady',
          points: 5,
          tags: ['ios', 'android'],
          date: '06/12/2023',
          comments: 3,
          nodes: 2
        },
        {
          title: 'num 2',
          assignTo: 'lady',
          points: 5,
          tags: ['ios', 'android'],
          date: '06/12/2023',
          comments: 3,
          nodes: 2
        },
        {
          title: 'num 3',
          assignTo: 'lady',
          points: 5,
          tags: ['ios', 'android'],
          date: '06/12/2023',
          comments: 3,
          nodes: 2
        }
      ]
    },
    {
      header: { quantity: 5, title: 'completed' },
      items: [
        {
          title: 'num 1',
          assignTo: 'lady',
          points: 5,
          tags: ['ios', 'android'],
          date: '06/12/2023',
          comments: 3,
          nodes: 2
        },
        {
          title: 'num 2',
          assignTo: 'lady',
          points: 5,
          tags: ['ios', 'android'],
          date: '06/12/2023',
          comments: 3,
          nodes: 2
        },
        {
          title: 'num 3',
          assignTo: 'lady',
          points: 5,
          tags: ['ios', 'android'],
          date: '06/12/2023',
          comments: 3,
          nodes: 2
        }
      ]
    }
  ]

  return (
    <StyledBox paddingTop={24}>
      <TaskTable columns={cols} tasks={task} />
    </StyledBox>
  )
}
