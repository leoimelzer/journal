import { useContext } from 'react'

import { ModalContext } from '@/contexts'

export const useModal = () => {
  const modal = useContext(ModalContext)

  if (!modal) {
    throw new Error(
      '[useModal] The application must be wrapped in ModalProvider for the usage of global modals.'
    )
  }

  return modal
}
