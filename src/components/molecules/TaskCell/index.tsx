import { useTheme } from 'styled-components'
import { ArrowDownIcon } from '../../../icons/ArrowDownIcon'
import { StyledGrid } from '../../atoms/StyledGrid'
import { StyledIconButton } from '../../atoms/StyledIconButton'
import { StyledText } from '../../atoms/StyledText'
import { TasksCellProps } from './cell.interface'
import { TaskCellWrapper } from './cell.styles'

export const TaskCell: React.FC<TasksCellProps> = ({ ...props }) => {
  const { quantity, title } = props
  const theme = useTheme()

  return (
    <TaskCellWrapper bgColor={bg => bg.palette.grey[400]} {...props}>
      <StyledGrid container style={{ gap: 10 }} alignItems={'center'}>
        <StyledIconButton
          icon={ArrowDownIcon}
          size='small'
          fill={theme.palette.grey[200]}
        />
        <StyledText
          text={title}
          $color={c => c.palette.common.white}
          textTransform='capitalize'
        />
        <StyledText
          text={quantity > 9 ? quantity : `0${quantity}`}
          $color={c => c.palette.grey[200]}
        />
      </StyledGrid>
    </TaskCellWrapper>
  )
}
