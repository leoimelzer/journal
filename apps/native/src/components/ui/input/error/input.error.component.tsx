import { Text } from 'react-native'

import { useTheme } from '@/hooks'

import type { InputErrorProps } from './input.error.types'

export function InputError(props: InputErrorProps) {
  const { style, children, ...rest } = props

  const theme = useTheme()

  return (
    <Text
      {...rest}
      style={[
        {
          color: theme.colors.semantic.error
        },
        style
      ]}
    >
      {children}
    </Text>
  )
}
