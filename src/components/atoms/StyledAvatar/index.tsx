import { AvatarProps } from './avatar.interface'
import { AvatarWrapper } from './avatar.styles'

export const StyledAvatar: React.FC<AvatarProps> = ({ ...props }) => {
  const { src, alt } = props
  return (
    <AvatarWrapper {...props}>
      <img src={src} alt={alt} />
    </AvatarWrapper>
  )
}
