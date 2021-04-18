import { ReactNode } from 'react'
import styled from 'styled-components'
import { CloseIcon } from './CloseIcon'
import { TypeIcon } from './TypeIcon'

export interface BannerProps {
  dismissable?: boolean
  onClose?: () => void
  children: ReactNode
}

const BackgroundContainer = styled.div`
  background-color: ${(props) => props.theme.colors.red};
  padding: 10px;
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const MainContent = styled.div`
  margin: 20px 10px;
  flex: 1;
`

export const Banner: React.FC<BannerProps> = (props) => {
  const { children, dismissable = true, onClose } = props

  return (
    <BackgroundContainer>
      <TypeIcon type="alert" />
      <MainContent>{children}</MainContent>
      {dismissable && <CloseIcon onClick={onClose} />}
    </BackgroundContainer>
  )
}
