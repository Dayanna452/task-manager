import { BoxProps } from './box.interface'
import { BoxWrapper } from './box.styles'

export const StyledBox: React.FC<BoxProps> = ({ ...props }) => {
  const { children } = props
  return <BoxWrapper {...props}>{children}</BoxWrapper>
}
