import { Dashboard } from '../containers/Dashboard'
import { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { ListTask } from '../containers/ListTask'

const Home = () => {
  const { value } = useContext(SidebarContext)

  return <>{value === 'dashboard' ? <Dashboard /> : <ListTask />}</>
}

export default Home
