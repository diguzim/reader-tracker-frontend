import styled from 'styled-components'

import { smallBreakpoint, mediumBreakpoint, bigBreakpoint } from 'common'

export const MainCenteredContent = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (min-width: ${smallBreakpoint}px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: ${mediumBreakpoint}px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: ${bigBreakpoint}px) {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
`