import { forwardRef } from 'react'

import {
  StyledTaskCard,
  StyledTaskCardBody,
  StyledTaskCardHeader,
  StyledTaskCardFooter,
  StyledTaskCardHeaderTitle,
  StyledTaskCardFooterIcons,
  StyledTaskCardBodyFirstRow,
  StyledTaskCardFooterIconsList,
  StyledTaskCardBodySecondRow
} from './card.style'
import { TaskCardProps } from './card.type'
import { StyledIconButton } from '../../atoms/StyledIconButton'
import { SendIcon } from '../../../icons/SendIcon'
import { StyledAvatar } from '../../atoms/StyledAvatar'

export const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(
  ({ title, ...props }, ref) => {
    return (
      <StyledTaskCard ref={ref} {...props}>
        <StyledTaskCardHeader>
          <StyledTaskCardHeaderTitle>{title}</StyledTaskCardHeaderTitle>
          <StyledIconButton icon={SendIcon}/>
        </StyledTaskCardHeader>
        <StyledTaskCardBody>
          <StyledTaskCardBodyFirstRow>
            <span className="points">4 Points</span>
            {/* <Badge title="Today" icon={<AlarmLineIcon />} /> */}
          </StyledTaskCardBodyFirstRow>
          <StyledTaskCardBodySecondRow>
            {/* <Badge title="IOS APP" $type="green" />
            <Badge title="ANDROID" $type="yellow" /> */}
          </StyledTaskCardBodySecondRow>
        </StyledTaskCardBody>
        <StyledTaskCardFooter>
          <StyledAvatar src="https://picsum.photos/50" alt="sm" />
          <StyledTaskCardFooterIconsList>
            <StyledTaskCardFooterIcons>
              <SendIcon />
            </StyledTaskCardFooterIcons>
            <StyledTaskCardFooterIcons>
              <span>5</span>
              <SendIcon />
            </StyledTaskCardFooterIcons>
            <StyledTaskCardFooterIcons>
              <span>3</span>
              <SendIcon />
            </StyledTaskCardFooterIcons>
          </StyledTaskCardFooterIconsList>
        </StyledTaskCardFooter>
      </StyledTaskCard>
    )
  }
)
