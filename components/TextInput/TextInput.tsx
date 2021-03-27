import { InputHTMLAttributes } from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.black};
`

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.grey};

  ::placeholder {
    color: ${props => props.theme.colors.grey};
  }
`

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
}

export function TextInput(props: TextInputProps) {
  const { name, label, className, ...rest } = props;
  
  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={rest.id}>{label}</Label>}
      <Input name={name} {...rest} />
    </Wrapper>
  )
}
