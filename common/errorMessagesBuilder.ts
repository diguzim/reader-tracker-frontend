import { translateMessage } from './translateMessage'

const errorMessageMapper: Record<string, string> = {
  'is invalid': 'error.invalid_field',
  'has already been taken': 'error.already_in_use'
}

export const errorMessagesBuilder = (errors: Record<string, string[]>) => {
  const fields = Object.keys(errors)
  const messages = [] as string[]

  fields.forEach(field => {
    errors[field].forEach(error => {
      const translatedErrorMessageCode = errorMessageMapper[error] || error
      const translatedMessage = translateMessage(translatedErrorMessageCode, { field })
      messages.push(translatedMessage)
    })
  })

  return messages
}
