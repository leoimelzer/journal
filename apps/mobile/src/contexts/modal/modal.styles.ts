import { StyleSheet } from 'react-native'

import type { ModalContextStyles } from './modal.types'

export const styles = StyleSheet.create<ModalContextStyles>({
  container: {
    padding: 20,
    borderRadius: 12,
    gap: 24,
    borderWidth: 1
  },
  content: {
    gap: 6
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12
  }
})
