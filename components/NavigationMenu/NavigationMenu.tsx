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
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: flex-start;
`

export function NavigationMenu(props: NavigationMenuProps) {
  const { children } = props
  const { width } = useWindowDimensions()

  if (width < 720) {
    return <StyledMobileNavigationMenu>{children}</StyledMobileNavigationMenu>
  }

  return <StyledDesktopNavigationMenu>{children}</StyledDesktopNavigationMenu>
}
