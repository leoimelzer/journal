import { useMemo } from 'react'
import { ActivityIndicator, Pressable } from 'react-native'

import { useTheme } from '@/hooks'

import { styles } from './button.styles'
import type { ButtonProps } from './button.types'

export function Button(props: ButtonProps) {
  const { loading, disabled, style, children, ...rest } = props

  const theme = useTheme()

  const isDisabled = useMemo(() => disabled || loading, [disabled, loading])

  return (
    <Pressable
      {...rest}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        isDisabled && styles.disabled,
        {
          backgroundColor: theme.colors.primary.main
        },
        style
      ]}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.text.primary} />
      ) : (
        <>{children}</>
      )}
    </Pressable>
  )
}
