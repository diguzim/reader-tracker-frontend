import { NavigationLink, NavigationMenu } from 'components'
import { AccountMenu } from 'layout'

export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationLink href="/">
        Inicio
      </NavigationLink>
      <NavigationLink href="/books">
        Livros
      </NavigationLink>
      <NavigationLink href="/readings">
        Leituras
      </NavigationLink>
      <AccountMenu />
    </NavigationMenu>
  )
}
