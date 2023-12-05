import { SizeType } from "../interfaces/base.interface"

export const getTabPadding = (size: SizeType) => {
  const options = {
    small: '10px',
    medium: '16px',
    large: '22px'
  }
  return options[size]
}
