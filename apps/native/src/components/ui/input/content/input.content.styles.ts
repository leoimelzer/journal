import { StyleSheet } from 'react-native'

import type { InputContentStyles } from './input.content.types'

export const styles = StyleSheet.create<InputContentStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    columnGap: 8
  }
})
