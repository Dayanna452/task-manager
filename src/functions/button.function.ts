import { DefaultTheme } from 'styled-components'

import {
  SizeType,
  BaseColorType,
  ButtonShapeType,
  ButtonVariantType
} from '../interfaces/base.interface'

export const getButtonBgColor = (
  theme: DefaultTheme,
  color: BaseColorType='primary',
  variant: ButtonVariantType='contained',
) => {
  const options = {
    text: {
      bgColor: 'transparent',
      bgColorHover:'transparent'
    },
    outlined: {
      bgColor: 'transparent',
      bgColorHover: 'transparent'
    },
    contained: {
      bgColor: theme.palette[color][400],
      bgColorHover: theme.palette[color][400]
    },
    translucent: {
      bgColor: `${theme.palette[color][400]}1a`,
      bgColorHover: `${theme.palette[color][400]}26`
    }
  }
  return options[variant]
}

export const getButtonTextColor = (
  theme: DefaultTheme,
  color: BaseColorType='primary',
  variant: ButtonVariantType='contained'
) => {
  const options = {
    text: {
      textColor: theme.palette[color][100],
      textColorHover: theme.palette[color][100]
    },
    outlined: {
      textColor: theme.palette[color][100],
      textColorHover: theme.palette[color][400]
    },
    contained: {
      textColor: theme.palette.common.white,
      textColorHover: theme.palette.common.white
    },
    translucent: {
      textColor: theme.palette[color][100],
      textColorHover: theme.palette[color][400]
    }
  }
  return options[variant]
}

export const getButtonSize = (size: SizeType) => {
  const options = {
    small: '0.8125rem',
    medium: '0.875rem',
    large: '0.9375rem'
  }
  return options[size]
}

export const getButtonPadding = (size: SizeType) => {
  const options = {
    small: '4px 10px',
    medium: '6px 16px',
    large: '8px 22px'
  }
  return options[size]
}

export const getButtonShape = (shape: ButtonShapeType) => {
  const options = {
    pill: '40px',
    square: '8px',
    rounded: '4px',
    'half-pill': '20px'
  }
  return options[shape]
}
