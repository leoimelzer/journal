import type { ComponentProps } from 'react'
import type { TextStyle } from 'react-native'

import type { MaterialCommunityIcons } from '@expo/vector-icons'

export interface IconProps extends ComponentProps<
  typeof MaterialCommunityIcons
> {}

export interface IconStyles {
  icon: TextStyle
}
