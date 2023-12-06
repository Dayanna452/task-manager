import { PlusSquareIcon } from '../icons/PlusSquareIcon'
import { StyledBox } from '../components/atoms/StyledBox'
import { StyledGrid } from '../components/atoms/StyledGrid'
import { Switchers } from '../components/molecules/Switchers'
import { StyledIconButton } from '../components/atoms/StyledIconButton'
import { AddTaskModal } from '../containers/ListTask/AddTaskModal'
import { useState } from 'react'

export const TaskLayout = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <AddTaskModal open={openModal} setOpen={setOpenModal} />
      <StyledBox padddingRight={10} paddingTop={30} paddingLeft={10}>
        <StyledGrid container rowSpacing={3}>
          <StyledGrid xs={12}>
            <StyledGrid container justifyContent={'space-between'}>
              <StyledGrid xs={10}>
                <Switchers />
              </StyledGrid>
              <StyledIconButton
                shape='rounded'
                fill={'#fff'}
                icon={PlusSquareIcon}
                onClick={() => setOpenModal(true)}
                $color={c => c.palette.primary[400]}
              />
            </StyledGrid>
          </StyledGrid>
          <StyledGrid xs={12}>{children}</StyledGrid>
        </StyledGrid>
      </StyledBox>
    </>
  )
}
