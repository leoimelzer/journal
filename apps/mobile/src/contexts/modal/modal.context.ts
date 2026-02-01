import { createContext } from 'react'

import type { ModalContextData } from './modal.types'

export const ModalContext = createContext<ModalContextData | undefined>(
  undefined
)
