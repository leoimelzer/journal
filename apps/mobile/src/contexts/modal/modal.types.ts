import type { ComponentProps } from 'react'
import type { ViewStyle } from 'react-native'

import type { Button as ButtonComponent } from '@/components'

export type Button = {
  type?: ComponentProps<typeof ButtonComponent>['type']
  loading?: boolean
  text: string
  onPress?: () => void | Promise<void>
}

export type State = {
  visible: boolean
  title: string
  description: string
  buttons: Button[]
}

export type ModalContextData = {
  show: (params: {
    title: string
    description: string
    buttons: Button[]
  }) => void
  hide: () => void
}

export interface ModalContextStyles {
  container: ViewStyle
  content: ViewStyle
  actions: ViewStyle
}
