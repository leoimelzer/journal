import type { TextProps as RNTextProps, TextStyle } from 'react-native'

type Font = 'light' | 'regular' | 'medium' | 'semibold' | 'bold'

type Size = 'small' | 'normal' | 'large'

export interface TextProps extends RNTextProps {
  color?: TextStyle['color']
  font?: Font
  size?: Size
}

export interface TextStyles extends Record<Font | Size, TextStyle> {}
