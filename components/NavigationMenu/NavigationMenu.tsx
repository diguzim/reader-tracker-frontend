import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'

import useWindowDimensions from '../../hooks/useWindowDimensions'

export interface NavigationMenuProps {
  children?: ReactNode
}

const NavigationMenuCommon = styled.nav`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.black}10;
`

const MobileNavigationMenu = styled(NavigationMenuCommon)`
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.colors.black}10;
  width: 100px;
`

const DesktopNavigationMenu = styled(NavigationMenuCommon)`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
`

export function NavigationMenu(props: NavigationMenuProps) {
  const { children } = props
  const { small } = useWindowDimensions()
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  function toggleMobileMenuVisibility() {
    setMobileMenuVisible(previousVisibility => !previousVisibility);
  }
  
  if (small) {
    return (
      <>
        <AiOutlineMenu role="button" aria-label="Activate" onClick={toggleMobileMenuVisibility} />
        {mobileMenuVisible && <MobileNavigationMenu>{children}</MobileNavigationMenu>}
      </>
    )
  }

  return <DesktopNavigationMenu>{children}</DesktopNavigationMenu>
}
