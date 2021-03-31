import { ReactNode, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import { Overlay } from './Overlay'
import { Menu } from './Menu'

interface MobileMenuInterface {
  children?: ReactNode
}

export function MobileMenu (props: MobileMenuInterface) {
  const { children } = props
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  function toggleMobileMenuVisibility () {
    setMobileMenuVisible(previousVisibility => !previousVisibility)
  }

  return (
    <>
      <AiOutlineMenu role="button" aria-label="Activate" onClick={toggleMobileMenuVisibility} />
      <Overlay mobileMenuVisible={mobileMenuVisible} onClick={toggleMobileMenuVisibility}/>
      <Menu visible={mobileMenuVisible} onCloseClick={toggleMobileMenuVisibility}>{children}</Menu>
    </>
  )
}
