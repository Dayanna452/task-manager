import { forwardRef, useState } from 'react'
import moment from 'moment'
import { useTheme } from 'styled-components'

import { TaskCardWrapper } from './card.styles'
import { TaskCardProps } from './card.interface'
import { StyledBox } from '../../atoms/StyledBox'
import { StyledText } from '../../atoms/StyledText'
import { StyledGrid } from '../../atoms/StyledGrid'
import { StyledBadge } from '../../atoms/StyledBadge'
import { StyledAvatar } from '../../atoms/StyledAvatar'
import { StyledIconButton } from '../../atoms/StyledIconButton'

import { DotsIcon } from '../../../icons/DotsIcon'
import { AlarmIcon } from '../../../icons/AlarmIcon'
import { CommentIcon } from '../../../icons/CommentIcon'
import { NodeTreeIcon } from '../../../icons/NodeTreeIcon'
import { AttachmentIcon } from './../../../icons/AttachmentIcon'

export const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(
  (
    {
      name,
      ios,
      assign,
      android,
      comments = 3,
      nodes = 5,
      pointEstimate = 4,
      dueDate = 'TODAY',
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    const [openModal, setOpenModal] = useState(false)

    return (
      <TaskCardWrapper ref={ref} {...props}>
        <StyledGrid
          container
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <StyledText
            text={name}
            fontSize={18}
            fontWeight={400}
            letterSpacing='1px'
            textTransform='capitalize'
            $color={c => c.palette.common.white}
          />
          <StyledIconButton
            icon={DotsIcon}
            fill={theme.palette.common.white}
            onClick={() => setOpenModal(!openModal)}
          />
        </StyledGrid>
        <StyledGrid
          container
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <StyledText
            fontSize={15}
            letterSpacing='1px'
            fontWeight={400}
            text={`${pointEstimate} points`}
            textTransform='capitalize'
            $color={c => c.palette.common.white}
          />
          <StyledBadge
            text={moment(dueDate).format('DD MMMM YYYY')}
            variant='translucent'
            fontSize={15}
            bgColor={c => c.palette.common.white}
            $color={c => c.palette.common.white}
            startIcon={<AlarmIcon />}
          />
        </StyledGrid>
        <StyledGrid container alignItems={'center'} style={{ gap: 10 }}>
          {ios && (
            <StyledBadge
              text={'IOS APP'}
              variant='translucent'
              fontSize={15}
              bgColor={c => c.palette.secondary[400]}
              $color={c => c.palette.secondary[400]}
            />
          )}
          {android && (
            <StyledBadge
              text={'ANDROID'}
              variant='translucent'
              fontSize={15}
              bgColor={c => c.palette.warning[400]}
              $color={c => c.palette.warning[400]}
            />
          )}
        </StyledGrid>
        <StyledGrid container justifyContent={'space-between'}>
          <StyledAvatar
            src={assign?.avatar || 'https://picsum.photos/50'}
            alt='sm'
          />
          <StyledGrid xs={8}>
            <StyledGrid
              container
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <StyledIconButton
                icon={AttachmentIcon}
                fill={theme.palette.common.white}
              />
              <StyledBox paddingLeft={10}>
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
              <StyledBox paddingLeft={10}>
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
            </StyledGrid>
          </StyledGrid>
        </StyledGrid>
      </TaskCardWrapper>
    )
  }
)
