import styled from 'styled-components'

interface OverlayProps {
  mobileMenuVisible: boolean
}

export const Overlay = styled.div<OverlayProps>`
  height: 100%;
  width: ${props => props.mobileMenuVisible ? '100%' : '0'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-x: hidden;
  transition: 0.5s;
`
