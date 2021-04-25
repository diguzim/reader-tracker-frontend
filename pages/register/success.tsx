import { PageLink } from 'components'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

function RegisterSuccess () {
  return (
    <Container>
      <h2>Cadastro realizado com sucesso</h2>
      <p>Clique <PageLink href="/login"><a>aqui</a></PageLink> para fazer o login</p>
    </Container>
  )
}

export default RegisterSuccess
