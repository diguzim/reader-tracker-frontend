import styled from 'styled-components'

import { smallBreakpoint } from "common";

export interface NavigationAnchorProps {
  isCurrentPage?: boolean;
}

export const NavigationAnchor = styled.a<NavigationAnchorProps>`
  padding: 5px;
  border-bottom: ${props => props.isCurrentPage ? `1px solid ${props.theme.colors.black}` : 'none'};
  height: 30px;
  
  @media only screen and (max-width: ${smallBreakpoint - 1}px) {
    &:not(:first-child) {
      border-top: 1px solid ${props => props.theme.colors.black}10;
    }
  }
  
  @media only screen and (min-width: ${smallBreakpoint}px) {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`
