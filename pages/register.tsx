import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from 'react'
import styled from 'styled-components'

interface FormTarget {
  email: string
  password: string
}

const Form = styled.form<any>`
  display: flex;
  flex-direction: column;
`

function Register() {
  const [email, setEmail] = useState('')
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
    <div>
      <h1>Register</h1>
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
    </div>
  )
}

export default Register
