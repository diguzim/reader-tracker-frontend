import { ReactNode } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styled from 'styled-components'

export interface NavigationMenuProps {
  children?: ReactNode
}

const StyledMobileNavigationMenu = styled.nav`
  display: flex;
  flex-direction: column;
`

const StyledDesktopNavigationMenu = styled.nav`
  display: flex;
  flex-direction: row;
`

export function NavigationMenu(props: NavigationMenuProps) {
  const { children } = props
  const { width } = useWindowDimensions()

  if (width < 720) {
    return <StyledMobileNavigationMenu>{children}</StyledMobileNavigationMenu>
  }

  return <StyledDesktopNavigationMenu>{children}</StyledDesktopNavigationMenu>
}
