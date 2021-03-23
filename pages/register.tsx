import {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react'
import styled from 'styled-components'

const Background = styled.div`
  height: 100%;
  background-image: url('/library_01.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
`

const Form = styled.form<any>`
  display: none;
  flex-direction: column;
`

const Title = styled.h1`
  color: #333333;
  margin-top: 0;
`

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  function handleOnChangeEmail(event: ChangeEvent<HTMLInputElement>) {
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
      <Title>Cadastre-se</Title>
      <Form onSubmit={registerUser}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          autoComplete="email"
          onChange={handleOnChangeEmail}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          autoComplete="password"
          onChange={handleOnChangePassword}
          required
        />

        <button type="submit">Register</button>
      </Form>
    </Background>
  )
}

export default Register