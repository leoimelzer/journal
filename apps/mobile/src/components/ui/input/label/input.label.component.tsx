import { useTheme } from '@/hooks'

import { Text } from '../../text'
import type { InputLabelProps } from './input.label.types'

export function InputLabel(props: InputLabelProps) {
  const { style, children, ...rest } = props

  const theme = useTheme()

  return (
    <Text {...rest} style={[{ color: theme.colors.text.secondary }, style]}>
      {children}
    </Text>
  )
}
