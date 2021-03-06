import { ButtonHTMLAttributes } from 'react'
import styled, { useTheme } from 'styled-components'

interface StyledButtonProps {
  backgroundColor: string
  color: string
  fontSize: string
  padding: string
  boxShadow: string
}

export interface ButtonProps extends Partial<StyledButtonProps>, ButtonHTMLAttributes<HTMLButtonElement> {
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
  boxShadow: props.boxShadow
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
  const { colors } = useTheme()

  const backgroundColor = incomingBackgroundColor ?? (primary
    ? colors.primary
    : 'transparent')
  const color = incomingColor ?? (primary ? colors.white : colors.black)
  const fontSize = incomingFontSize ?? (size === 'small'
    ? '12px'
    : size === 'medium'
      ? '14px'
      : '16px')
  const padding = incomingPadding ?? (size === 'small'
    ? '10px 16px'
    : size === 'medium'
      ? '11px 20px'
      : '12px 24px')
  const boxShadow = incomingBoxShadow ?? (primary
    ? 'none'
    : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset')
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
