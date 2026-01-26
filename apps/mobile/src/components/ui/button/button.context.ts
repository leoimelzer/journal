import { createContext } from 'react'

import type { ButtonContextData } from './button.types'

export const ButtonContext = createContext<ButtonContextData | undefined>(
  undefined
)
