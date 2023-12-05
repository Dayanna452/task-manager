//import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { ButtonWrapper } from './button.styles'
import { ButtonProps } from './button.interface'

export const StyledButton: React.FC<ButtonProps> = ({
  shape = 'square',
  text = 'Boton',
  size = 'medium',
  color = 'primary',
  variant = 'contained',
  ...props
}) => {
  return (
    <ButtonWrapper
      {...props}
      size={size}
      shape={shape}
      color={color}
      variant={variant}
      ref={props.btnRef}
    >
      {props.startIcon && (
        <span className='button-startIcon'>{props.startIcon}</span>
      )}
      {props.loading && (
        <span className='button-startIcon'>
          {/* <AiOutlineLoading3Quarters /> */}{' '}
        </span>
      )}
      {text}
      {props.endIcon && <span className='button-endIcon'>{props.endIcon}</span>}
    </ButtonWrapper>
  )
}
