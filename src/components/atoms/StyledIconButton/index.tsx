import { IconProps } from '../../../interfaces/base.interface'
import { ThemeType } from '../../../interfaces/theme.interface'
import { IconButtonProps } from './iconbutton.interface'
import { IconButtonWrapper } from './iconbutton.styles'

export const StyledIconButton: React.FC<IconButtonProps> = ({ ...props }) => {
  const Icon: React.FC<IconProps> = props.icon
  const handleColor = (theme: Pick<ThemeType, 'palette'>) => {
    if (props.$color) {
      return props.$color(theme)
    } else {
      return 'transparent'
    }
  }

  return (
    <IconButtonWrapper
      {...props}
      shape={props.shape}
      href={props.href}
      ref={props.iconButtonRef}
      style={props.sx}
      className={props.cn}
      $color={
        handleColor as string & ((theme: Pick<ThemeType, 'palette'>) => string)
      }
    >
      <Icon $iconsize={props.$iconSize} fill={props.fill} stroke={props.fill} />
    </IconButtonWrapper>
  )
}
