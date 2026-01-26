import { useMemo } from 'react'
import { ActivityIndicator, Pressable } from 'react-native'

import { useTheme } from '@/hooks'

import { ButtonContext } from './button.context'
import { styles } from './button.styles'
import type { ButtonProps } from './button.types'

export function Button(props: ButtonProps) {
  const {
    type = 'primary',
    loading,
    disabled,
    style,
    children,
    ...rest
  } = props

  const theme = useTheme()

  const isDisabled = useMemo(() => disabled || loading, [disabled, loading])

  return (
    <ButtonContext.Provider value={{ type }}>
      <Pressable
        {...rest}
        disabled={isDisabled}
        style={({ pressed }) => [
          styles.container,
          pressed && styles.pressed,
          isDisabled && styles.disabled,
          {
            backgroundColor: theme.colors[type]
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
    </ButtonContext.Provider>
  )
}
