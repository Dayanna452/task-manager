import { ThemeType } from '../../../interfaces/theme.interface'
import { StyledLabel } from '../StyledLabel'
import { MultiSelectUIProps } from './reactSelect.interface'
import { components } from 'react-select'
import moment from 'moment'
import {
  colourStyles,
  RSelectWrapper,
  ReactSelectWrapper,
  RCreatableWrapper
} from './reactSelect.styles'
import { StyledText } from '../StyledText'
import { StyledGrid } from '../StyledGrid'
import { StyledCalendar } from '../StyledCalendar'
import { StyledBox } from '../StyledBox'
import { useState } from 'react'

export const ReactSelectUI: React.FC<MultiSelectUIProps> = ({
  id,
  isMulti,
  size,
  calendar,
  value,
  startIcon,
  ...props
}) => {
  const handleBorderColor = (theme: Pick<ThemeType, 'palette'>) => {
    if (props.borderColor) {
      return props.borderColor(theme)
    } else {
      return theme.palette.grey[200]
    }
  }

  const Select = props.creatable ? RCreatableWrapper : RSelectWrapper
  //const [calendarVal, setCalendarVal] = useState<unknown>()
  const { Option, Menu, MenuList , Input} = components
  const IconOption = (props: any) => (
    <Option {...props}>
      <StyledGrid container style={{ gap: 5 }}>
        <img
          src={props.data.icon}
          style={{ width: 24 }}
          alt={props.data.label}
        />
        <StyledText
          fontSize={15}
          fontWeight={400}
          text={props.data.label}
          $color={c => c.palette.common.white}
          textTransform='capitalize'
        />
      </StyledGrid>
    </Option>
  )


  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={startIcon} style={{ width: 24 }} alt={'icon'} />
      </components.DropdownIndicator>
    )
  }


  const MenuListItems = (prop: any) => {
    return (
      <Menu {...prop} className='react-select__menu-list'>
        <MenuList {...prop} className='react-select__list'>
          <StyledBox>
            <StyledCalendar
              value={value as any}
              onChange={props.onChange as any}
            />
          </StyledBox>
        </MenuList>
      </Menu>
    )
  }

 


  return (
    <ReactSelectWrapper
      fullWidth={props.fullWidth}
      startIcon={startIcon}
      isMulti={isMulti}
      value={value}
      calendar={calendar}
    >
      {!props.hiddenLabel && (
        <StyledLabel labelColor={props.labelColor} size={size} htmlFor={id}>
          {props.label}
        </StyledLabel>
      )}
      <Select
        //autocomplete='off'
        styles={colourStyles}
        id={id}
        inputId={id}
        size={size}
        components={{
          Option: IconOption,
          DropdownIndicator: DropdownIndicator,
          Menu: calendar ? MenuListItems : Menu
        }}
        maxMenuHeight={props.maxMenuHeight || 205}
        borderColor={handleBorderColor}
        {...props}
      />
    </ReactSelectWrapper>
  )
}
