import { ReactNode, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import useWindowDimensions from 'hooks/useWindowDimensions'
import { MobileNavigationMenu } from './MobileNavigationMenu'
import { DesktopNavigationMenu } from './DesktopNavigationMenu'

export interface NavigationMenuProps {
  children?: ReactNode
}

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
