import { IconType } from 'react-icons/lib'
import { AiOutlineCloseCircle, AiOutlineExclamationCircle, AiOutlineInfo } from 'react-icons/ai'
import { theme } from 'styles'

export interface type {
  icon: IconType
  backgroundColor: string
  color: string
}

export const error: type = {
  icon: AiOutlineCloseCircle,
  backgroundColor: theme.colors.red,
  color: theme.colors.white
}

export const caution: type = {
  icon: AiOutlineExclamationCircle,
  backgroundColor: theme.colors.yellow,
  color: theme.colors.white
}

export const neutral: type = {
  icon: AiOutlineInfo,
  backgroundColor: theme.colors.white,
  color: theme.colors.black
}
