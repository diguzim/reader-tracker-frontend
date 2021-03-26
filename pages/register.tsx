import { Button, PageLink, TextInput } from 'components'
import {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react'
import styled from 'styled-components'

const TextInputSpaced = styled(TextInput)`
  margin-bottom: 20px;
`

const Background = styled.div`
  height: 100%;
  background-image: url('/library_01.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const Darker = styled.div`
  background-color: rgba(0,0,0,0.5);
  height: 100%;
`

const Wrapper = styled.div`
  height: 100%;
  padding-top: 50px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`

const Form = styled.form<any>`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  margin-bottom: 10px;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.light_grey};
  margin-top: 0;
  text-align: center;
`

const RegisteredLink = styled(PageLink)`
  color: ${props => props.theme.colors.light_grey};
  display: block;
  text-align: center;
`

const RegisterButton = styled(Button)`
  margin-top: 20px;
`

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  function handleOnChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    console.log('event', event);
    setEmail(event.currentTarget.value)
  }

  function handleOnChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value)
  }

  async function registerUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const res = await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    })
    await res.json()
  }

  return (
    <Background>
      <Darker>
        <Wrapper>
          <Title>Cadastre-se</Title>
          <Form onSubmit={registerUser}>
            <TextInputSpaced name="email" label="Email" autoComplete="email" onChange={handleOnChangeEmail} placeholder="Seu Email (obrigatório)" required />
            <TextInputSpaced name="password" label="Senha" onChange={handleOnChangePassword} placeholder="Sua senha (obrigatório)" required />
            <RegisterButton primary size={"large"}>Cadastrar</RegisterButton>
          </Form>
          <RegisteredLink href="/login">Já tem cadastro? Clique aqui.</RegisteredLink>
        </Wrapper>
      </Darker>
    </Background>
  )
}

export default Register