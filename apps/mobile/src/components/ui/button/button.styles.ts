import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 50,
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
