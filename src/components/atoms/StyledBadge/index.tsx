import { BadgeStyled } from './badge.styles'
import { BadgeProps } from './badge.interface'
import { StyledText } from '../StyledText'

export const StyledBadge: React.FC<BadgeProps> = ({
  size = 'small',
  fontSize = 14,
  shape='rounded',
  ...props
}) => {
  return (
    <BadgeStyled size={size} shape={shape} {...props} style={props.sx}>
      {props.startIcon && <span>{props.startIcon}</span>}
      <StyledText
        fontWeight={props.fontWeight || 400}
        fontSize={fontSize}
        text={props.text}
        $color={props.$color ? props.$color : props.bgColor}
      />
      {props.endIcon && <span>{props.endIcon}</span>}
    </BadgeStyled>
  )
}
