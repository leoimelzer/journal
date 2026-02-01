import { useTheme } from '@/hooks'

import { Icon } from '../../icon'
import { useButtonContext } from '../button.hooks'
import type { Type } from '../button.types'
import type { ButtonIconProps } from './button.icon.types'

export function ButtonIcon(props: ButtonIconProps) {
  const { color, ...rest } = props

  const { type } = useButtonContext()

  const theme = useTheme()

  const colorsForType: Record<Type, string> = {
    primary: theme.dark ? theme.colors.card : theme.colors.text.primary,
    secondary: theme.dark ? theme.colors.card : theme.colors.text.primary,
    accent: theme.dark ? theme.colors.card : theme.colors.text.primary,
    neutral: theme.colors.text.primary,
    alert: theme.colors.text.primary
  }

  return <Icon {...rest} color={color ?? colorsForType[type]} />
}
