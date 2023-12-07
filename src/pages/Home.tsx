import { Dashboard } from '../containers/Dashboard'
import { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { ListTask } from '../containers/ListTask'
import { TaskLayout } from '../layouts/TaskLayout'

const Home = () => {
  const { value } = useContext(SidebarContext)

  return (
    <TaskLayout>
      {value === 'dashboard' ? <Dashboard /> : <ListTask />}
    </TaskLayout>
  )
}

export default Home
