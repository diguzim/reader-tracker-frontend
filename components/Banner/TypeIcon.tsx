import { BiErrorCircle } from 'react-icons/bi'
import styled from 'styled-components'

interface TypeIconProps {
  type: string
}

const IconPositioner = styled.div`
  align-self: center;
`

export const TypeIcon: React.FC<TypeIconProps> = (props) => {
  return (
    <IconPositioner>
      <BiErrorCircle size={30} />
    </IconPositioner>
  )
}
