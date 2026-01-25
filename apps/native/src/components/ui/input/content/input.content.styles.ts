import { StyleSheet } from 'react-native'

import type { InputContentStyles } from './input.content.types'

export const styles = StyleSheet.create<InputContentStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    columnGap: 8
  }
})
