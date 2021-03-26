import styled from 'styled-components'

export interface PageAnchorProps {
  isCurrentPage?: boolean;
}

export const PageAnchor = styled.a<PageAnchorProps>`
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
