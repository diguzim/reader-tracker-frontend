import { ReactNode } from 'react'
import Link from 'next/link'

import { NavigationAnchor } from 'components'

export interface NavigationLinkProps {
  href: string;
  children: ReactNode;
}

export function NavigationLink(props: NavigationLinkProps) {
  const { href, children } = props;

  return (
    <Link href={href}>
      <NavigationAnchor >{children}</NavigationAnchor>
    </Link>
  )
}
