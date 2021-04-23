import { translateMessage } from './translateMessage'

const errorMessageMapper: Record<string, string> = {
  'is invalid': 'error.invalid_field',
  'has already been taken': 'error.already_in_use'
}

interface ErrorMessageMapperPatternAndMapper {
  pattern: string
  errorCode: string
  groupMapping: string[]
}

const errorMessageMapperPatternAndMapper: ErrorMessageMapperPatternAndMapper[] = [
  {
    pattern: 'is too short \\(minimum is (\\d+) characters\\)',
    errorCode: 'error.minimum_characters',
    groupMapping: ['size']
  }
]

interface FindErrorMessageAndParameters {
  message: string
  parameters?: Record<string, string>
}

function findErrorMessageAndParameters (
  error: string
): FindErrorMessageAndParameters {
  const message = errorMessageMapper[error]
  if (message) {
    return {
      message
    }
  }

  let messagePattern

  errorMessageMapperPatternAndMapper.forEach(
    (patternErrorCodeAndGroupMapping) => {
      const {
        pattern,
        errorCode,
        groupMapping
      } = patternErrorCodeAndGroupMapping
      const matchResult = error.match(pattern)
      if (!matchResult) {
        return
      }

      const groups = matchResult.splice(1)

      const parameters = groups.reduce<Record<string, string>>(
        (acc, group, index) => {
          acc[groupMapping[index]] = group
          return acc
        },
        {}
      )

      messagePattern = {
        message: errorCode,
        parameters
      }
    }
  )

  if (messagePattern) {
    return messagePattern
  }

  return {
    message: error
  }
}

export const errorMessagesBuilder = (errors: Record<string, string[]>) => {
  const fields = Object.keys(errors)
  const messages = [] as string[]

  fields.forEach((field) => {
    errors[field].forEach((error) => {
      const { message, parameters } =
        findErrorMessageAndParameters(error) || error
      const translatedMessage = translateMessage(message, {
        field: translateMessage(field),
        ...parameters
      })
      messages.push(translatedMessage)
    })
  })

  return messages
}
