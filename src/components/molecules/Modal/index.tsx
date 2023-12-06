import { useEffect, useState } from 'react'

import { ModalProps } from './modal.interface'
import { ModalWrapper, Curtain, ModalContent } from './modal.styles'

export const Modal = ({
  open,
  onClose,
  children,
  width,
  title
}: ModalProps) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setShowModal(false)
      }, 300)
    } else {
      setTimeout(() => {
        setShowModal(true)
      }, 300)
    }
  }, [open])

  if (showModal)
    return (
      <ModalWrapper>
        <Curtain open={open} onClick={() => onClose && onClose()}>
          <ModalContent
            title={title}
            width={width}
            onClick={e => e.stopPropagation()}
          >
            {children}
          </ModalContent>
        </Curtain>
      </ModalWrapper>
    )
  return (
    <>
      {open && (
        <ModalWrapper>
          <Curtain open={showModal} onClick={() => onClose && onClose()} />
        </ModalWrapper>
      )}
    </>
  )
}
