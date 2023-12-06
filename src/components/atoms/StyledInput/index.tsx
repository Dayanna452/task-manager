import { forwardRef, useContext } from 'react'

import { InputUIProps } from './input.interface'
import { StyledLabel } from '../StyledLabel'
import { StyledHeader } from '../StyledHeader'
import { SearchIcon } from '../../../icons/SearchIcon'
import { InputContainer, InputWrapper } from './input.styles'
import { SearchBarContext } from '../../../contexts/SearchBarContext'

// eslint-disable-next-line react/display-name
export const StyledInput = forwardRef<HTMLInputElement, InputUIProps>(
  (
    {
      id,
      fullWidth,
      hiddenLabel,
      label,
      shape = 'square',
      size = 'medium',
      labelColor,
      shadow,
      type,
      ...props
    },
    ref
  ) => {
    const {
      selected,
      searchValue,
      clearSearch,
      handleBlur,
      handleChange,
      handleFocus
    } = useContext(SearchBarContext)

    return (
      <InputContainer fullWidth={fullWidth}>
        {!hiddenLabel && (
          <StyledLabel labelColor={labelColor} size={size} htmlFor={id}>
            {label}
            {props.required && <span style={{ color: 'red' }}> *</span>}
          </StyledLabel>
        )}
        <InputWrapper shape={shape} size={size} shadow={shadow}>
          {type === 'search' && (
            <span className='start-icon'>
              <SearchIcon />
            </span>
          )}
          <input
            type={type || 'text'}
            id={id}
            ref={ref}
            min={0}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={searchValue}
            autoComplete='off'
            onWheel={e => e.currentTarget.blur()}
            {...props}
          />
          {type === 'search' && (
            <span className='end-icon'>
              <StyledHeader
                clearSearch={clearSearch}
                isSearchSelected={selected}
              />
            </span>
          )}
        </InputWrapper>
      </InputContainer>
    )
  }
)
