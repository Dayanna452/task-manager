import { useTheme } from 'styled-components'

import { Table } from '../../organisms/Table'
import { TaskItemWrapper } from './item.styles'
import { StyledBox } from '../../atoms/StyledBox'
import { StyledText } from '../../atoms/StyledText'
import { StyledGrid } from '../../atoms/StyledGrid'
import { StyledBadge } from '../../atoms/StyledBadge'
import { StyledAvatar } from '../../atoms/StyledAvatar'
import { CommentIcon } from '../../../icons/CommentIcon'
import { NodeTreeIcon } from '../../../icons/NodeTreeIcon'
import { ArrowRightIcon } from '../../../icons/ArrowRightIcon'
import { StyledIconButton } from '../../atoms/StyledIconButton'
import { TaskBaseProps } from '../../../interfaces/task.interface'

export const TableItem: React.FC<TaskBaseProps> = ({ ...props }) => {
  const theme = useTheme()
  const { title, assignTo, comments, date, nodes, points, tags } = props

  return (
    <TaskItemWrapper>
      <Table>
        <StyledGrid container justifyContent={'space-between'}>
          <StyledGrid xs={4} lg={6}>
            <StyledText text={title} />
          </StyledGrid>
          <StyledGrid xs={8} lg={6}>
            <StyledGrid
              container
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <StyledBox>
                <StyledGrid container alignItems={'center'}>
                  <StyledText
                    text={comments}
                    $color={c => c.palette.common.white}
                  />
                  <StyledIconButton
                    size='small'
                    icon={CommentIcon}
                    fill={theme.palette.common.white}
                  />
                </StyledGrid>
              </StyledBox>
              <StyledBox>
                <StyledGrid container alignItems={'center'}>
                  <StyledText
                    text={nodes}
                    $color={c => c.palette.common.white}
                  />
                  <StyledIconButton
                    size='small'
                    icon={NodeTreeIcon}
                    fill={theme.palette.common.white}
                  />
                </StyledGrid>
              </StyledBox>
              <StyledBox>
                <StyledGrid container alignItems={'center'}>
                  <StyledText
                    text={'Details'}
                    fontSize={15}
                    fontWeight={400}
                    $color={c => c.palette.common.white}
                  />
                  <StyledIconButton
                    size='small'
                    icon={ArrowRightIcon}
                    fill={theme.palette.common.white}
                  />
                </StyledGrid>
              </StyledBox>
            </StyledGrid>
          </StyledGrid>
        </StyledGrid>
        <StyledGrid container>
          {tags?.map((tag, idx) => (
            <StyledBadge key={idx} text={tag} />
          ))}
        </StyledGrid>
        <StyledText text={`${points} points`} />
        <StyledGrid container style={{gap:10}}>
          <StyledAvatar src='https://picsum.photos/50' alt='assigne-user' />
          <StyledText text={assignTo} />
        </StyledGrid>
        <StyledText text={date} />
      </Table>
    </TaskItemWrapper>
  )
}
