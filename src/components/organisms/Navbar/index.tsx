import { NotificationIcon } from '../../../icons/NotificationIcon'
import { StyledAvatar } from '../../atoms/StyledAvatar'
import { StyledGrid } from '../../atoms/StyledGrid'
import { StyledInput } from '../../atoms/StyledInput'
import { NavBarWrapper } from './navbar.styles'
import user from '../../../assets/user.png'

export const Navbar = () => {
  return (
    <NavBarWrapper>
      <StyledGrid container $spacing={1} alignItems={'center'}>
        <StyledGrid xs={9} lg={10} xl={10.8} xl4={11}>
          <StyledInput fullWidth type='search' />
        </StyledGrid>
        <StyledGrid xs={1.5} lg={1} xl={0.6} xl4={0.5}>
          <StyledGrid container justifyContent={'flex-end'}>
            <NotificationIcon />
          </StyledGrid>
        </StyledGrid>
        <StyledGrid xs={1.5} lg={1} xl={0.6} xl4={0.5}>
          <StyledGrid container justifyContent={'flex-end'}>
            <StyledAvatar src={user} alt={'avatar-user'} />
          </StyledGrid>
        </StyledGrid>
      </StyledGrid>
    </NavBarWrapper>
  )
}
