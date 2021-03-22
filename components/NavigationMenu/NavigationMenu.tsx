import { ReactNode, useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styled from 'styled-components'

export interface NavigationMenuProps {
  children?: ReactNode
}

const NavigationMenuCommon = styled.nav`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const MobileNavigationMenu = styled(NavigationMenuCommon)`
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
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
        <button onClick={toggleMobileMenuVisibility}>Activate</button>
        {mobileMenuVisible && <MobileNavigationMenu>{children}</MobileNavigationMenu>}
      </>
    )
  }

  return <DesktopNavigationMenu>{children}</DesktopNavigationMenu>
}
