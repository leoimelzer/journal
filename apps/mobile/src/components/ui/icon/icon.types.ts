import type { ComponentProps } from 'react'
import type { TextStyle } from 'react-native'

import type { Feather } from '@expo/vector-icons'

export interface IconProps extends ComponentProps<typeof Feather> {}

export interface IconStyles {
  icon: TextStyle
}
