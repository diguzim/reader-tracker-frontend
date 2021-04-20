import { translateMessage } from 'common'

describe('translateMessage', () => {
  it('should translate the field', () => {
    expect(translateMessage('password')).toBe('senha')
  })

  it('should translate the field with parameters and fill it properly', () => {
    expect(translateMessage('error.invalid_field', { field: 'email' })).toBe('Campo email inválido')
  })

  it('should keep the original message if not able to translate', () => {
    expect(translateMessage('lalala', { field: 'email' })).toBe('lalala')
  })
})
