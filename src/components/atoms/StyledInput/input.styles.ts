import styled from 'styled-components'

import { InputUIProps } from './input.interface'
import {
  getInputFontSize,
  getInputHeight
} from '../../../functions/input.function'

export const InputContainer = styled.div<InputUIProps>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  border-radius: 16px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.palette.grey[400]};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0px;
    background-color: transparent;
  }
`

export const InputWrapper = styled.div<InputUIProps>`
  gap: 4px;
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.grey[200]};
  height: ${({ size }) => size && getInputHeight(size)};
  font-size: ${({ size }) => size && getInputFontSize(size)};
  box-shadow: ${({ shadow }) => shadow && '0px 1px 3px rgba(0, 0, 0, 0.08)'};
  

  input {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 13px;
    position: relative;
    background-color: inherit;
    &::placeholder {
      color: ${({ theme }) => theme.palette.grey[200]};
    }
    &:disabled {
      background-color: rgb(231, 232, 245);
    }
  }
  .start-icon{
    display: inline-flex;
    align-items: center;
    gap: 24px;

    svg {
      width: 24px;
      height: 24px;
      color: ${({ theme }) => theme.palette.grey[200]};
    }
  }
  .end-icon{
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  .end-icon {
    display: inline-flex;
    align-items: center;
    gap: 24px;

    svg {
      width: 24px;
      height: 24px;
      color: ${({ theme }) => theme.palette.grey[200]};
    }
  }
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`
