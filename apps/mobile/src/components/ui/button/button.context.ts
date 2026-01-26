import { createContext } from 'react'

import type { ButtonContextProps } from './button.types'

export const ButtonContext = createContext<ButtonContextProps | undefined>(
  undefined
)
