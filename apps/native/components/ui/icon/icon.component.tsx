import { MaterialCommunityIcons } from '@expo/vector-icons'

import { getStyles } from './icon.styles'
import type { IconProps } from './icon.types'
import { useTheme } from '@react-navigation/native'

export function Icon(props: IconProps) {
  const theme = useTheme()

  const styles = getStyles()

  return (
    <MaterialCommunityIcons
      {...props}
      size={props.size ?? 24}
      color={props.color ?? theme.colors.text}
      style={[styles.container, props.style]}
    />
  )
}
