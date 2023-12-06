import { ButtonShapeType, SizeType } from "../interfaces/base.interface"

export const getIconSize = (size: SizeType) => {
  const options = {
    small: '32px',
    medium: '42px',
    large: '52px'
  }
  return options[size]
}

export const getIconShape = (shape: ButtonShapeType) => {
  const options = {
    pill: '40px',
    'half-pill': '20px',
    rounded: '8px',
    square: '0'
  }
  return options[shape]
}
