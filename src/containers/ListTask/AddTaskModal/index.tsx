import { ModalProps } from '@mui/base'
import { Modal } from '../../../components/molecules/Modal'

interface AddTask {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const AddTaskModal = ({ ...props }: AddTask) => {
  const { open, setOpen } = props
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      AddTaskModal
    </Modal>
  )
}
