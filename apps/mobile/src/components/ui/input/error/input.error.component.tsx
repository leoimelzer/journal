import { useTheme } from '@/hooks'

import { Text } from '../../text'
import type { InputErrorProps } from './input.error.types'

export function InputError(props: InputErrorProps) {
  const { style, children, ...rest } = props

  const theme = useTheme()

  return (
    <Text
      {...rest}
      style={[
        {
          color: theme.colors.error.text
        },
        style
      ]}
    >
      {children}
    </Text>
  )
}
