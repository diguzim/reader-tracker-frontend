import styled from 'styled-components'

export interface BannerProps {}

export const Banner = styled.div<BannerProps>`
  background-color: ${props => props.theme.colors.red}
`
