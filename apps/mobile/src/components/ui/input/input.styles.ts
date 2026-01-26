import { StyleSheet } from 'react-native'

import type { InputStyles } from './input.types'

export const styles = StyleSheet.create<InputStyles>({
  input: {
    flex: 1,
    paddingVertical: 14,
    fontFamily: 'Inter_400Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20
  }
})
