import styled from 'styled-components'
// import { getInputHeight } from '@/functions/input'
import ReactSelect, { StylesConfig } from 'react-select'
import Creatable from 'react-select/creatable'
import { MultiSelectUIProps } from './reactSelect.interface'
import { getInputHeight } from '../../../functions/input.function'

export const colourStyles: StylesConfig<any, true> = {
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? '#0e4da4'
        : isFocused
        ? 'transparent'
        : undefined,
      color: isDisabled
        ? undefined
        : isSelected
        ? '#FFFFFF'
        : isFocused
        ? '#000000'
        : undefined
    }
  }
}

export const RSelectWrapper = styled(ReactSelect)<MultiSelectUIProps>`
  .css-13cymwt-control,
  .css-16xfy0z-control,
  .css-t3ipsp-control {
    border: ${({ theme, border, borderColor }) =>
      border ? `1px solid ${borderColor && borderColor(theme)}` : 'none'};
    box-shadow: ${({ shadow }) =>
      shadow ? '0px 1px 3px rgba(0, 0, 0, 0.08)' : 'none'};
    min-height: 36px;
    border-radius: 4px;
    background-color: rgba(148, 151, 154, 0.1);
    flex-direction: ${({ isMulti }) => (isMulti ? 'row' : 'row-reverse')};

    & > .css-3w2yfm-ValueContainer,
    .css-1fdsijx-ValueContainer {
      height: 100%;
      overflow-y: auto;

      & > .css-1dimb5e-singleValue {
        color: ${({ theme: { palette } }) => palette.common.white};
      }

      & > .css-1jqq78o-placeholder {
        color: ${({ theme: { palette } }) => palette.common.white};
        font-size: 15px;
        font-weight: 400;
      }

      & [role='button'] {
        cursor: pointer;
      }
      .css-1p3m7a8-multiValue {
        display: ${({ hideSelectedOptions }) => hideSelectedOptions && 'none'};
      }
    }

    & > .css-1hb7zxy-IndicatorsContainer {
      & > div {
        cursor: pointer;
      }
      & > span {
        display: none;
      }
    }
  }
  .react-select__menu-list {
    height: 280px;
    width: 260px;
    .react-select__list {
      border-radius: 4px;
      overflow: hidden;
      padding: 0;
    }
  }
  .css-1nmdiq5-menu {
    color: ${({ theme: { palette } }) => palette.common.white};
    border-radius: 8px;
    & > div {
      background-color: ${({ theme: { palette }, calendar }) =>
        calendar ? 'transparent' : palette.grey[300]};
      border-radius: inherit;
      //height: 400px;

      & > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .css-1wlit7h-NoOptionsMessage {
        color: ${({ theme: { palette } }) => palette.common.white};
        cursor: default;
        &:hover {
          background-color: transparent;
          color: ${({ theme: { palette } }) => palette.common.white};
        }
      }
    }
  }
`

export const RCreatableWrapper = styled(Creatable)<MultiSelectUIProps>`
  .css-13cymwt-control,
  .css-t3ipsp-control {
    border: ${({ theme, border, borderColor }) =>
      border ? `1px solid ${borderColor && borderColor(theme)}` : 'none'};
    box-shadow: ${({ shadow }) =>
      shadow ? '0px 1px 3px rgba(0, 0, 0, 0.08)' : 'none'};
    min-height: 36px;
    border-radius: 8px;

    &:hover {
      border: ${({ theme, border, borderColor }) =>
        border ? `1px solid ${borderColor && borderColor(theme)}` : 'none'};
    }
    &:focus {
      border: ${({ theme, border }) =>
        border ? `1px solid ${theme.palette.primary[400]}` : 'none'};
    }

    & > .css-3w2yfm-ValueContainer,
    .css-1fdsijx-ValueContainer {
      height: 100%;
      overflow-y: auto;

      & > .css-1dimb5e-singleValue {
        color: #797979;
      }

      & > .css-1jqq78o-placeholder {
        color: ${({ theme: { palette } }) => palette.common.white};
        font-weight: 500;
      }

      & [role='button'] {
        cursor: pointer;
      }
      .css-1p3m7a8-multiValue {
        display: ${({ hideSelectedOptions }) => hideSelectedOptions && 'none'};
      }
    }

    & > .css-1hb7zxy-IndicatorsContainer {
      & > div {
        cursor: pointer;
      }
      & > span {
        display: none;
      }
    }
  }

  .css-1nmdiq5-menu {
    color: ${({ theme: { palette } }) => palette.common.white};
    border-radius: 8px;
    outline: ${({ theme: { palette } }) => `2px solid ${palette.grey[200]}`};
    & > div {
      background-color: ${({ theme: { palette }, calendar }) =>
        calendar ? 'transparent' : palette.grey[300]};
      border-radius: inherit;

      & > div {
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          background-color: ${({ theme: { palette } }) => palette.primary[400]};
          color: ${({ theme: { palette } }) => palette.common.white};
        }
      }

      .css-1wlit7h-NoOptionsMessage {
        color: #797979;
        cursor: default;
        &:hover {
          background-color: transparent;
          color: #797979;
        }
      }
    }
  }
`

export const ReactSelectWrapper = styled.div<MultiSelectUIProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ fullWidth }) => fullWidth && '100%'};
`
