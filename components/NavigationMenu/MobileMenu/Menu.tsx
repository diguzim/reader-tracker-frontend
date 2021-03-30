import { ReactNode } from 'react'
import styled, { useTheme } from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

const CloseIcon = styled(AiOutlineClose)`
  background-color: ${(props) => props.theme.colors.white};
  padding: 5px;
`

interface WrapperProps {
  visible: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: row;
  overflow-x: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${(props) => (props.visible ? '2' : '-1')};
`

interface MenuContentProps {
  visible: boolean
}

const MenuContent = styled.nav<MenuContentProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  padding: 10px;
`

interface MenuProps {
  visible: boolean
  children?: ReactNode
  onCloseClick: () => void
}

export function Menu(props: MenuProps) {
  const { children, visible, onCloseClick } = props
  const { colors } = useTheme()

  return (
    <Wrapper visible={visible}>
      <MenuContent visible={visible}>
        {children}
      </MenuContent>
      <CloseIcon
        color={colors.black}
        size={24}
        role="button"
        aria-label="Activate"
        onClick={onCloseClick}
      />
    </Wrapper>
  )
}
