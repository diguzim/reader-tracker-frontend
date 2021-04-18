import { AiOutlineCloseCircle } from 'react-icons/ai'
import styled from 'styled-components'

interface CloseIconProps {
  onClick?: () => void
  color: string
}

const IconPositioner = styled.div`
  align-self: flex-start;
`

export const CloseIcon: React.FC<CloseIconProps> = (props) => {
  const { onClick, color } = props

  return (
    <IconPositioner>
      <AiOutlineCloseCircle
        size={30}
        onClick={onClick}
        role="button"
        aria-label="Close Banner"
        color={color}
      />
    </IconPositioner>
  )
}
