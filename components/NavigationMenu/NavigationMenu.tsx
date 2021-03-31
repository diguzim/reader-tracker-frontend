import { ReactNode } from 'react'

import useWindowDimensions from 'hooks/useWindowDimensions'
import { MobileMenu } from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'

export interface NavigationMenuProps {
  children?: ReactNode
}

export function NavigationMenu (props: NavigationMenuProps) {
  const { children } = props
  const { small } = useWindowDimensions()

  if (small) {
    return <MobileMenu>{children}</MobileMenu>
  }

  return <DesktopMenu>{children}</DesktopMenu>
}
