import { NavigationAnchor, NavigationMenu } from 'components'
import Link from 'next/link'

export function MainNavigation() {
  return <NavigationMenu>
    <Link href="/">
      <NavigationAnchor>Inicio</NavigationAnchor>
    </Link>
    <Link href="/books">
      <NavigationAnchor>Livros</NavigationAnchor>
    </Link>
    <Link href="/readings">
      <NavigationAnchor>Leituras</NavigationAnchor>
    </Link>
  </NavigationMenu>
}