import styled, { css } from 'styled-components'

import {
  getButtonBgColor,
  getButtonSize,
  getButtonTextColor,
  getButtonShape,
  getButtonPadding
} from '../../../functions/button.function'
import { ButtonProps } from './button.interface'

export const ButtonWrapper = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color, variant }) =>
    getButtonBgColor(theme, color, variant)?.bgColor};
  color: ${({ theme, color, variant }) =>
    getButtonTextColor(theme, color, variant)?.textColor};
  font-weight: 500;
  font-size: ${({ size='medium' }) => getButtonSize(size)};
  line-height: 1.75;
  letter-spacing: 0.02857em;
  padding: ${({ size='medium' }) => getButtonPadding(size)};
  min-width: 64px;
  border: ${({ theme, color='primary', variant }) =>
    variant === 'outlined' && `1px solid ${theme.palette[color][100]}`};
  border-radius: ${({ shape }) => getButtonShape(shape||'rounded')};
  cursor: pointer;

  &:hover {
    border: ${({ theme, color = 'primary', variant = 'contained' }) =>
      variant === 'outlined' && `1px solid ${theme.palette[color][400]}`};
    background-color: ${({ theme, color, variant }) =>
      getButtonBgColor(theme, color, variant)?.bgColorHover};
    color: ${({ theme, color, variant }) =>
      getButtonTextColor(theme, color, variant)?.textColorHover};
  }

  &:disabled {
    background-color: ${({ theme, color='primary' }) => `${theme.palette[color][100]}50`};
    cursor: not-allowed;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  .button-startIcon {
    margin-right: 8px;
  }

  .button-endIcon {
    margin-left: 8px;
  }
`
