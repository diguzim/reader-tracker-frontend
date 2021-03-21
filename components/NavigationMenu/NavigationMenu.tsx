import { ReactNode, useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styled from 'styled-components'

export interface NavigationMenuProps {
  children?: ReactNode
}

const StyledMobileNavigationMenu = styled.nav`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100px;
`

const StyledDesktopNavigationMenu = styled.nav`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
        {mobileMenuVisible && <StyledMobileNavigationMenu>{children}</StyledMobileNavigationMenu>}
      </>
    )
  }

  return <StyledDesktopNavigationMenu>{children}</StyledDesktopNavigationMenu>
}
