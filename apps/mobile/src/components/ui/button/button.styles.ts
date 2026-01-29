import { StyleSheet } from 'react-native'

import type { ButtonStyles } from './button.types'

export const styles = StyleSheet.create<ButtonStyles>({
  container: {
    height: 48,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 6
  },
  pressed: {
    opacity: 0.8
  },
  disabled: {
    opacity: 0.5
  }
})
