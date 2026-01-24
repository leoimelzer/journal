import { StyleSheet } from 'react-native'

import type { InputErrorStyles } from './input.error.types'

export const styles = StyleSheet.create<InputErrorStyles>({
  error: {
    marginTop: 4,
    fontSize: 12,
    color: 'red'
  }
})
