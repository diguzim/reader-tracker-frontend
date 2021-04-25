const messages: Record<string, string> = {
  // field names
  email: 'email',
  password: 'senha',

  // error messages from
  'error.page_not_found.title': 'Página não encontrada',
  'error.invalid_field': 'Campo {field} inválido',
  'error.already_in_use': 'Campo {field} já está em uso',
  'error.minimum_characters': 'Campo {field} muito curto (mínimo de {size} caracteres)'
}

function fillProperties (translatedMessage: string, params: Record<string, string>): string {
  let message = translatedMessage
  const properties = Object.keys(params)

  properties.forEach(property => {
    const value = params[property]
    message = message.replace(new RegExp(`{${property}}`, 'g'), value)
  })

  return message
}

export const translateMessage = (message: string, params: Record<string, string> = {}) => {
  const translatedMessage = messages[message] || message

  const filledMessage = fillProperties(translatedMessage, params)

  return filledMessage
}
