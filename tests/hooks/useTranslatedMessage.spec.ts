import { useTranslatedMessage } from 'hooks'

describe('useTranslatedMessage', () => {
  it('should translate the field', () => {
    expect(useTranslatedMessage('password')).toBe('senha')
  })

  it('should translate the field with parameters and fill it properly', () => {
    expect(useTranslatedMessage('error.invalid_field', { field: 'email' })).toBe('email é inválido')
  })
})
