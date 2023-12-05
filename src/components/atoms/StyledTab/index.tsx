import { TabProps } from './tab.interface'
import { TabStyled } from './tab.styles'

export const StyledTab: React.FC<TabProps> = ({ ...props }) => {
  const { text } = props
  return (
    <TabStyled {...props}>
      {props.startIcon && (
        <span className='button-startIcon'>{props.startIcon}</span>
      )}
      {text}
      {props.endIcon && <span className='button-endIcon'>{props.endIcon}</span>}
    </TabStyled>
  )
}
