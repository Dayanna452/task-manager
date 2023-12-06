import { createContext, useState } from 'react'

interface SearchBarContextProps {
  searchValue: string
  selected: boolean
  handleFocus: () => void
  handleBlur: () => void
  clearSearch: () => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBarContext = createContext<SearchBarContextProps>(
  {} as SearchBarContextProps
)

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const handleFocus = () => setSelected(true)

  const handleBlur = () => {
    setTimeout(() => {
      setSelected(false)
    }, 200)
  }

  const clearSearch = () => setSearchValue('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
  }

  return (
    <SearchBarContext.Provider
      value={{
        searchValue,
        selected,
        handleFocus,
        handleBlur,
        clearSearch,
        handleChange
      }}
    >
      {children}
    </SearchBarContext.Provider>
  )
}

const Consumer = SearchBarContext.Consumer

export { Provider, Consumer }
// eslint-disable-next-line import/no-anonymous-default-export
export default { Provider, Consumer }
