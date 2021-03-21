import styled from 'styled-components'
import Link from 'next/link'

import { smallBreakpoint } from "common";

console.log('smallBreakpoint', smallBreakpoint);

export const NavigationAnchor = styled.a`
  @media only screen and (max-width: ${smallBreakpoint - 1}px) {
    padding: 5px;
    &:not(:first-child) {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  @media only screen and (min-width: ${smallBreakpoint}px) {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`
