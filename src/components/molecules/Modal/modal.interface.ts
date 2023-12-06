export interface ModalProps {
  open: boolean
  title?: string
  onClose?: () => void
  width?: number | string
  children: React.ReactNode
}
