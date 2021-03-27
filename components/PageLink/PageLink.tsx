import { ReactNode } from 'react'
import Link from 'next/link'

import { PageAnchor } from 'components'
import { useRouter } from 'next/dist/client/router';

export interface PageLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function PageLink(props: PageLinkProps) {
  const { href, children, className } = props;
  const router = useRouter()
  const isCurrentPage = router.pathname === href

  return (
    <Link href={href}>
      <PageAnchor href={href} className={className} isCurrentPage={isCurrentPage}>{children}</PageAnchor>
    </Link>
  )
}
