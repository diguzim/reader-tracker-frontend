import { ReactNode } from 'react'
import Link from 'next/link'

import { NavigationAnchor } from 'components'
import { useRouter } from 'next/dist/client/router';

export interface NavigationLinkProps {
  href: string;
  children: ReactNode;
}

export function NavigationLink(props: NavigationLinkProps) {
  const { href, children } = props;
  const router = useRouter()
  const isCurrentPage = router.pathname === href

  return (
    <Link href={href}>
      <NavigationAnchor isCurrentPage={isCurrentPage}>{children}</NavigationAnchor>
    </Link>
  )
}
