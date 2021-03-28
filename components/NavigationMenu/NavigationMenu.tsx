import { ReactNode } from 'react'

import useWindowDimensions from 'hooks/useWindowDimensions'
import { MobileNavigationMenu } from './MobileNavigationMenu'
import { DesktopNavigationMenu } from './DesktopNavigationMenu'

export interface NavigationMenuProps {
  children?: ReactNode
}

export function NavigationMenu(props: NavigationMenuProps) {
  const { children } = props
  const { small } = useWindowDimensions()

  if (small) {
    return <MobileNavigationMenu>{children}</MobileNavigationMenu>
  }

  return <DesktopNavigationMenu>{children}</DesktopNavigationMenu>
}
