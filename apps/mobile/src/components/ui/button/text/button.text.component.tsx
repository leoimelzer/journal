import { useTheme } from '@/hooks'

import { Text } from '../../text/text.component'
import { useButtonContext } from '../button.hooks'
import type { Type } from '../button.types'
import type { ButtonTextProps } from './button.text.types'

export function ButtonText(props: ButtonTextProps) {
  const { children, color, ...rest } = props

  const { type } = useButtonContext()

  const theme = useTheme()

  const colorsForType: Record<Type, string> = {
    primary: theme.select({
      dark: theme.colors.card,
      light: theme.colors.text.primary
    }),
    secondary: theme.select({
      dark: theme.colors.card,
      light: theme.colors.text.primary
    }),
    accent: theme.select({
      dark: theme.colors.card,
      light: theme.colors.text.primary
    }),
    neutral: theme.colors.text.primary,
    alert: theme.colors.text.primary
  }

  return (
    <Text {...rest} color={color ?? colorsForType[type]}>
      {children}
    </Text>
  )
}
