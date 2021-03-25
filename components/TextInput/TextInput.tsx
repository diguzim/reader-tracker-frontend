import { InputHTMLAttributes } from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
`

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function TextInput(props: TextInputProps) {
  const { name, label } = props;
  
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} />
    </Wrapper>
  )
}