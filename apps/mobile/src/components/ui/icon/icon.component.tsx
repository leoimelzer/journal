import { useTheme } from '@/hooks'
import { Feather } from '@expo/vector-icons'

import { styles } from './icon.styles'
import type { IconProps } from './icon.types'

export function Icon(props: IconProps) {
  const { size, color, style, ...rest } = props

  const theme = useTheme()

  return (
    <Feather
      {...rest}
      size={size ?? 24}
      color={color ?? theme.colors.text.primary}
      style={[styles.icon, style]}
    />
  )
}
