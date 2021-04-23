import { errorMessagesBuilder } from 'common'

describe('errorMessagesBuilder', () => {
  xit('should properly build simple messages', () => {
    const errorObject = {
      email: ['is invalid', 'has already been taken']
    }

    const messages = errorMessagesBuilder(errorObject)
    expect(messages[0]).toBe('Campo email inválido')
    expect(messages[1]).toBe('Campo email já está em uso')
  })

  xit('should use the incoming message as result when message could not be found', () => {
    const errorObject = {
      email: ['lalala']
    }

    const messages = errorMessagesBuilder(errorObject)
    expect(messages[0]).toBe('lalala')
  })

  it('should properly build complex messages that need to be find through regex', () => {
    const errorObject = {
      password: ['is too short (minimum is 6 characters)'],
      lalala: ['is too short (minimum is 6 characters)']
    }

    const messages = errorMessagesBuilder(errorObject)
    expect(messages[0]).toBe('Campo senha muito curto (mínimo de 6 caracteres)')
    expect(messages[1]).toBe('Campo lalala muito curto (mínimo de 6 caracteres)')
  })
})
