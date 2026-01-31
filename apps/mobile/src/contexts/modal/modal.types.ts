import type { ComponentProps } from 'react'
import type { ViewStyle } from 'react-native'

import type { Button as ButtonComponent } from '@/components'

export type Button = {
  type?: ComponentProps<typeof ButtonComponent>['type']
  loading?: boolean
  disabled?: boolean
  text: string
  onPress?: () => void | Promise<void>
}

export type State = {
  title: string | null
  description: string | null
  buttons: Button[]
}

export type ModalContextData = {
  show: (params: State) => void
  hide: () => void
}

export interface ModalContextStyles {
  container: ViewStyle
  content: ViewStyle
  actions: ViewStyle
}
