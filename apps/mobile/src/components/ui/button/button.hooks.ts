import { useContext } from 'react'

import { ButtonContext } from './button.context'

export const useButtonContext = () => {
  const context = useContext(ButtonContext)

  if (!context) {
    throw new Error(
      '[useButtonContext] Button subcomponents must be used within a Button.'
    )
  }

  return context
}
