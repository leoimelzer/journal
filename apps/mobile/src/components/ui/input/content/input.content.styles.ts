import { StyleSheet } from 'react-native'

import type { InputContentStyles } from './input.content.types'

export const styles = StyleSheet.create<InputContentStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderRadius: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    columnGap: 8
  }
})
