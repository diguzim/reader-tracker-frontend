import { InputHTMLAttributes } from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.light_grey};
`

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  border-color: ${props => props.theme.colors.grey};

  ::placeholder {
    color: ${props => props.theme.colors.grey};
  }
`

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function TextInput(props: TextInputProps) {
  const { name, label, className, ...rest } = props;
  
  return (
    <Wrapper className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} {...rest} />
    </Wrapper>
  )
}