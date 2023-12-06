import styled from 'styled-components'

import { AvatarProps } from './avatar.interface'

export const AvatarWrapper = styled.div<AvatarProps>`
  border-radius: 100%;
  height: 40px;
  width: 40px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-position: 50% 50%;
  }
`
