import { errorMessagesBuilder, translateMessage } from 'common'
import { Banner, BannerTypes, BulletList, Button, PageLink, TextInput } from 'components'
import { useRouter } from 'next/dist/client/router'
import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useState
} from 'react'
import styled from 'styled-components'

const TextInputSpaced = styled(TextInput)`
  margin-bottom: 20px;

  & > label {
    color: ${props => props.theme.colors.lightGrey};
  }
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
  color: ${props => props.theme.colors.lightGrey};
  margin-top: 0;
  text-align: center;
`

const RegisterLink = styled(PageLink)`
  color: ${props => props.theme.colors.lightGrey};
  display: block;
  text-align: center;
`

const LoginButton = styled(Button)`
  margin-top: 20px;
`

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([] as ReactNode[])

  const router = useRouter()

  function handleOnChangeEmail (event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value)
  }

  function handleOnChangePassword (event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value)
  }

  function dismissError () {
    setErrors([])
  }

  function displayError (error: string) {
    const errorMessage = translateMessage(error)
    setErrors([errorMessage])
  }

  async function LoginUser (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const res = await fetch('http://localhost:4000/users/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    })

    if (res.ok) {
      return await router.push('/')
    }

    const { error } = await res.json()
    displayError(error)
  }

  return (
    <Background>
      {errors.length > 0 && <Banner type={BannerTypes.Error} onClose={dismissError}><BulletList list={errors}></BulletList></Banner>}
      <Darker>
        <Wrapper>
          <Title>Acesse sua conta</Title>
          <Form onSubmit={LoginUser}>
            <TextInputSpaced name="email" label="Email" autoComplete="email" onChange={handleOnChangeEmail} placeholder="Seu Email" required />
            <TextInputSpaced name="password" label="Senha" onChange={handleOnChangePassword} placeholder="Sua senha" type="password" required />
            <LoginButton primary size={'large'} type="submit">Entrar</LoginButton>
          </Form>
          <RegisterLink href="/register">Não tem cadastro? Clique aqui.</RegisterLink>
        </Wrapper>
      </Darker>
    </Background>
  )
}

export default Login
