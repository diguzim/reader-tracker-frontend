import Link from 'next/link'

import { NavigationAnchor, NavigationLink, NavigationMenu } from 'components'

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
    </NavigationMenu>
  )
}
