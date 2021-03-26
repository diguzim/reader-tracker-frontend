import styled from 'styled-components'

interface StyledButtonProps {
  backgroundColor: string
  color: string
  fontSize: string
  padding: string
  boxShadow: string
  onClick?: () => void
}

export interface ButtonProps extends Partial<StyledButtonProps> {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
}

const StyledButton = styled.button<StyledButtonProps>((props) => ({
  fontFamily: 'Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
  fontWeight: 700,
  border: 0,
  borderRadius: '3em',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 1,
  backgroundColor: props.backgroundColor,
  color: props.color,
  fontSize: props.fontSize,
  padding: props.padding,
  boxShadow: props.boxShadow,
}))

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  fontSize: incomingFontSize,
  backgroundColor: incomingBackgroundColor,
  color: incomingColor,
  padding: incomingPadding,
  children,
  boxShadow: incomingBoxShadow,
  ...props
}) => {
  const backgroundColor = incomingBackgroundColor
    ? incomingBackgroundColor
    : primary
    ? '#1ea7fd'
    : 'transparent'
  const color = incomingColor ? incomingColor : primary ? 'white' : '#333'
  const fontSize = incomingFontSize
    ? incomingFontSize
    : size === 'small'
    ? '12px'
    : size === 'medium'
    ? '14px'
    : '16px'
  const padding = incomingPadding
    ? incomingPadding
    : size === 'small'
    ? '10px 16px'
    : size === 'medium'
    ? '11px 20px'
    : '12px 24px'
  const boxShadow = incomingBoxShadow
    ? incomingBoxShadow
    : primary
    ? 'none'
    : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'
  return (
    <StyledButton
      type="button"
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      padding={padding}
      boxShadow={boxShadow}
      {...props}
    >
      {children}
    </StyledButton>
  )
}
