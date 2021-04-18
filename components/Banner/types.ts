import { IconType } from 'react-icons/lib'
import { AiOutlineCloseCircle, AiOutlineExclamationCircle, AiOutlineInfoCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import { theme } from 'styles'

export enum BannerTypes {
  Neutral = 'neutral',
  Error = 'error',
  Caution = 'caution',
  Info = 'info',
  Success = 'success'
}

interface typeStyle {
  icon: IconType
  backgroundColor: string
  color: string
}

export const typesStyles: Record<BannerTypes, typeStyle> = {
  neutral: {
    icon: AiOutlineInfoCircle,
    backgroundColor: theme.colors.lightGrey,
    color: theme.colors.black
  },
  error: {
    icon: AiOutlineCloseCircle,
    backgroundColor: theme.colors.red,
    color: theme.colors.white
  },
  caution: {
    icon: AiOutlineExclamationCircle,
    backgroundColor: theme.colors.yellow,
    color: theme.colors.black
  },
  info: {
    icon: AiOutlineInfoCircle,
    backgroundColor: theme.colors.blue,
    color: theme.colors.white
  },
  success: {
    icon: AiOutlineCheckCircle,
    backgroundColor: theme.colors.green,
    color: theme.colors.black
  }
}
