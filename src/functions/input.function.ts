import { SizeType } from "../interfaces/base.interface"

export const getInputHeight = (size: SizeType) => {
  const options = {
    small: '36px',
    medium: '44px',
    large: '52px'
  }
  return options[size]
}

export const getInputFontSize = (size: SizeType) => {
  const options = {
    small: '14px',
    medium: '16px',
    large: '18px'
  }
  return options[size]
}
