import { AddTask } from '../AddTaskModal'
import { Modal } from '../../../components/molecules/Modal'
import { StyledGrid } from '../../../components/atoms/StyledGrid'
import { StyledText } from '../../../components/atoms/StyledText'
import { StyledButton } from '../../../components/atoms/StyledButton'

interface DeleteTaskProps extends AddTask {
  handleConfirm?: () => void
}

export const DeleteTaskModal: React.FC<DeleteTaskProps> = ({ ...props }) => {
  const { open, setOpen, handleConfirm } = props

  return (
    <Modal width={800} open={open} onClose={() => setOpen(false)}>
      <StyledGrid container $spacing={4} alignItems={'center'} justifyContent={'space-between'}>
        <StyledGrid xs={12}>
          <StyledText
            fontSize={20}
            fontWeight={700}
            textAlign={'center'}
            $color={c => c.palette.grey[200]}
            text={'Are your sure to delete the article?'}
          />
        </StyledGrid>
        <StyledGrid xs={12} md={5} lg={4}>
          <StyledButton
            variant='text'
            style={{ color: '#fff' }}
            text={'Cancel'}
            fullWidth
            onClick={() => setOpen(false)}
          />
          <StyledGrid />
        </StyledGrid>
        <StyledGrid xs={12} md={5} lg={4}>
          <StyledButton text={'Confirm'} onClick={handleConfirm} fullWidth />
        </StyledGrid>
      </StyledGrid>
    </Modal>
  )
}
