import { ReactNode } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styled from 'styled-components'

export interface NavigationMenuProps {
  children?: ReactNode
}

const StyledMobileNavigationMenu = styled.nav`
  display: flex;
  flex-direction: 'column';
`

export function NavigationMenu(props: NavigationMenuProps) {
  const { children } = props
  const { width } = useWindowDimensions()

  if (width < 720) {
    return <StyledMobileNavigationMenu>{children}</StyledMobileNavigationMenu>
  }

  return <p>Desktop to be implemented</p>
}
