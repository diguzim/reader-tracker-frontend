import { ReactNode, useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from 'react-icons/ai'

import { NavigationMenuCommon } from "./NavigationMenuCommon";

export const MobileNavigationWrapper = styled(NavigationMenuCommon)`
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.colors.black}10;
  width: 100px;
`

interface MobileNavigationMenuInterface {
  children?: ReactNode
}

export function MobileNavigationMenu(props: MobileNavigationMenuInterface) {
  const { children } = props;
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  function toggleMobileMenuVisibility() {
    setMobileMenuVisible(previousVisibility => !previousVisibility);
  }

  return (
    <>
      <AiOutlineMenu role="button" aria-label="Activate" onClick={toggleMobileMenuVisibility} />
      {mobileMenuVisible && <MobileNavigationWrapper>{children}</MobileNavigationWrapper>}
    </>
  )
}