import type { PressableProps, ViewStyle } from 'react-native'

export type Type = 'primary' | 'secondary' | 'accent' | 'neutral'

export interface ButtonContextProps {
  type: Type
}

export interface ButtonProps extends PressableProps {
  type?: Type
  loading?: boolean
  style?: ViewStyle
}

export interface ButtonStyles {
  container: ViewStyle
  pressed: ViewStyle
  disabled: ViewStyle
}
