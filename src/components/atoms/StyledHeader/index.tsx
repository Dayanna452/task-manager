import { HeaderProps } from './header.interface'
import { CloseIcon } from '../../../icons/CloseIcon'

export const StyledHeader: React.FC<HeaderProps> = ({
  clearSearch,
  isSearchSelected
}) => {
  return (
    <>
      { isSearchSelected && (
        <i onClick={clearSearch}>
          <CloseIcon />
        </i>
      )}
    </>
  )
}
