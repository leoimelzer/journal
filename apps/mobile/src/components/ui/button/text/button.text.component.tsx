import { Text } from '../../text/text.component'
import type { ButtonTextProps } from './button.text.types'

export function ButtonText(props: ButtonTextProps) {
  const { children, ...rest } = props

  return <Text {...rest}>{children}</Text>
}
