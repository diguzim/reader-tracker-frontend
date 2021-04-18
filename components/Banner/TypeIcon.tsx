import styled from 'styled-components'
import { BannerTypes, typesStyles } from './types'

interface TypeIconProps {
  type: BannerTypes
}

const IconPositioner = styled.div`
  align-self: center;
`

export const TypeIcon: React.FC<TypeIconProps> = (props) => {
  const { type } = props

  const { color, icon: Icon } = typesStyles[type]

  return (
    <IconPositioner>
      <Icon size={30} color={color} />
    </IconPositioner>
  )
}
