import { MaterialCommunityIcons } from '@expo/vector-icons'

import { getStyles } from './icon.styles'
import type { IconProps } from './icon.types'
import { colors } from '@/constants'
import { useColorScheme } from 'react-native'

export function Icon(props: IconProps) {
  const styles = getStyles()

  const colorScheme = useColorScheme() ?? 'light'

  return (
    <MaterialCommunityIcons
      {...props}
      size={props.size ?? 24}
      color={props.color ?? colors[colorScheme].text}
      style={[styles.container, props.style]}
    />
  )
}
