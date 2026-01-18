import type { MaterialCommunityIcons } from '@expo/vector-icons'
import type { ComponentProps } from 'react'
import type { TextStyle } from 'react-native'

export type IconProps = ComponentProps<typeof MaterialCommunityIcons>

export interface IconStyles {
  container: TextStyle
}
