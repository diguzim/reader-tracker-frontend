import { ReactNode } from 'react'
import styled from 'styled-components'
import { CloseIcon } from './CloseIcon'
import { TypeIcon } from './TypeIcon'
import { BannerTypes, typesStyles } from './types'

export interface BannerProps {
  type?: BannerTypes
  dismissable?: boolean
  onClose?: () => void
  children: ReactNode
}

interface BackgroundContainerProps {
  color: string
}

const BackgroundContainer = styled.div<BackgroundContainerProps>`
  background-color: ${(props) => props.color};
  padding: 10px;
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

interface MainContentProps {
  color: string
}

const MainContent = styled.div<MainContentProps>`
  margin: 20px 10px;
  flex: 1;
  color: ${props => props.color};
`

export const Banner: React.FC<BannerProps> = (props) => {
  const { type = BannerTypes.Neutral, children, dismissable = true, onClose } = props

  const { color, backgroundColor } = typesStyles[type]

  return (
    <BackgroundContainer color={backgroundColor}>
      <TypeIcon type={type} />
      <MainContent color={color}>{children}</MainContent>
      {dismissable && <CloseIcon color={color} onClick={onClose} />}
    </BackgroundContainer>
  )
}
