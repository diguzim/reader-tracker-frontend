import { errorMessagesBuilder } from 'common'

describe('errorMessagesBuilder', () => {
  it('should properly build the message if possible', () => {
    const errorObject = {
      email: ['is invalid', 'has already been taken', 'lalala']
    }

    const messages = errorMessagesBuilder(errorObject)
    expect(messages[0]).toBe('Campo email inválido')
    expect(messages[1]).toBe('Campo email já está em uso')
    expect(messages[2]).toBe('lalala')
  })
})
