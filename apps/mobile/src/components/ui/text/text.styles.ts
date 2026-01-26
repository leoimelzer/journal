import { StyleSheet } from 'react-native'

import type { TextStyles } from './text.types'

export const styles = StyleSheet.create<TextStyles>({
  light: {
    fontFamily: 'Inter_300Light',
    fontWeight: '300'
  },
  regular: {
    fontFamily: 'Inter_400Regular',
    fontWeight: '400'
  },
  medium: {
    fontFamily: 'Inter_500Medium',
    fontWeight: '500'
  },
  semibold: {
    fontFamily: 'Inter_600SemiBold',
    fontWeight: '600'
  },
  bold: {
    fontFamily: 'Inter_700Bold',
    fontWeight: '700'
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
