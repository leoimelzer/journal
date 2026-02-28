import { StyleSheet } from 'react-native'

import type { TextStyles } from './text.types'

export const styles = StyleSheet.create<TextStyles>({
  regular: {
    fontFamily: 'Lora_400Regular'
  },
  medium: {
    fontFamily: 'Lora_500Medium'
  },
  semibold: {
    fontFamily: 'Lora_600SemiBold'
  },
  bold: {
    fontFamily: 'Lora_700Bold'
  },
  small: {
    fontSize: 14,
    lineHeight: 20
  },
  normal: {
    fontSize: 16,
    lineHeight: 24
  },
  large: {
    fontSize: 20,
    lineHeight: 28
  }
})
