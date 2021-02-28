import { FormEvent } from 'react'
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
  async function registerUser(event: FormEvent<FormTarget>) {
    event.preventDefault()
    console.log('registering user')

    // const res = await fetch('localhost:3000/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     user: {
    //       email: event.currentTarget.email,
    //       password: event.currentTarget.password,
    //     },
    //   }),
    // })

    // const result = await res.json()
    // console.log('result', result)
  }

  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={registerUser}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" autoComplete="email" required />

        <label htmlFor="password">Password</label>
        <input id="password" type="text" autoComplete="password" required />

        <button type="submit">Register</button>
      </Form>
    </div>
  )
}

export default Register
