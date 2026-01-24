import type { PressableProps, ViewStyle } from 'react-native'

export interface ButtonProps extends PressableProps {
  loading?: boolean
  style?: ViewStyle
}
