import { StyleSheet } from 'react-native'

import type { InputLabelStyles } from './input.label.types'

export const styles = StyleSheet.create<InputLabelStyles>({
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
    fontWeight: '500'
  }
})
