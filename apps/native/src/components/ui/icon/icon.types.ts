import type { ComponentProps } from 'react'
import type { TextStyle } from 'react-native'

import type { MaterialCommunityIcons } from '@expo/vector-icons'

export type IconProps = ComponentProps<typeof MaterialCommunityIcons>

export interface IconStyles {
  container: TextStyle
}
