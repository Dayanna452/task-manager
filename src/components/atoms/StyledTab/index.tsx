import { TabProps } from './tab.interface'
import { TabStyled } from './tab.styles'

export const StyledTab: React.FC<TabProps> = ({ ...props }) => {
  const { text, startIcon, endIcon } = props
  return (
    <TabStyled {...props}>
      {startIcon && <span className='button-startIcon'>{startIcon}</span>}
      {text}
      {endIcon && <span className='button-endIcon'>{endIcon}</span>}
    </TabStyled>
  )
}
