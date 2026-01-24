import { StyleSheet } from 'react-native'

import type { InputContentStyles } from './input.content.types'

export const styles = StyleSheet.create<InputContentStyles>({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 16,
    borderRadius: 6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    columnGap: 8
  }
})
