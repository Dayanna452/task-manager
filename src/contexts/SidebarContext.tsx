import { createContext, useState } from 'react'
import { FunctionLineIcon } from '../icons/FunctionLineIcon'
import { PlusIcon } from '../icons/PlusIcon'
import { MenuLineIcon } from '../icons/MenuLineIcon'
import { NavigationProps } from '../components/organisms/Sidebar'

interface SidebarContextProps {
  value: string
  navigation: NavigationProps[]
  navigationMobile: NavigationProps[]
  setValue: React.Dispatch<React.SetStateAction<string>>
  handleChange: (e: React.SyntheticEvent, newValue: string) => void
}

export const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
)

const Provider = ({ children }: { children: React.ReactNode }) => {
  const navigationMobile = [
    { name: 'dashboard', icon: <FunctionLineIcon /> },
    { name: 'add project', icon: <PlusIcon /> },
    { name: 'my task', icon: <MenuLineIcon /> }
  ]
  const navigation = [navigationMobile[0], navigationMobile[2]]

  const [value, setValue] = useState(navigationMobile[0].name)

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    e.preventDefault()
    setValue(newValue)
  }
  console.log('value', value)

  return (
    <SidebarContext.Provider
      value={{
        value,
        setValue,
        handleChange,
        navigation,
        navigationMobile
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

const Consumer = SidebarContext.Consumer

export { Provider, Consumer }
// eslint-disable-next-line import/no-anonymous-default-export
export default { Provider, Consumer }
