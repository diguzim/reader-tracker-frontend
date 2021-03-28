import styled from "styled-components";

import { NavigationMenuCommon } from "./NavigationMenuCommon";

export const MobileNavigationMenu = styled(NavigationMenuCommon)`
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.colors.black}10;
  width: 100px;
`
