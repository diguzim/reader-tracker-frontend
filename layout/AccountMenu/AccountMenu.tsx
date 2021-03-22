import styled from 'styled-components'
import { NavigationLink } from 'components'
import { smallBreakpoint } from 'common'

const Positioner = styled.div`
  @media only screen and (min-width: ${smallBreakpoint}px) {
    margin-left: auto;
  }
`

export function AccountMenu() {
  return (
    <Positioner>
      <NavigationLink href="/register">Cadastre-se</NavigationLink>
    </Positioner>
  )
}
