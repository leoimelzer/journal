import { forwardRef } from 'react'
import { Text as RNText } from 'react-native'

import { useTheme } from '@/hooks'

import { styles } from './text.styles'
import type { TextProps } from './text.types'

export const Text = forwardRef<RNText, TextProps>((props, ref) => {
  const { style, ...rest } = props

  const theme = useTheme()

  return (
    <RNText
      {...rest}
      ref={ref}
      style={[
        styles.body,
        {
          color: theme.colors.text.primary
        },
        style
      ]}
    />
  )
})

Text.displayName = 'TextComponent'
