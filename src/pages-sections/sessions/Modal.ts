import { useCallback, useContext } from "react"
import ConfirmationModal from "ui/lib/molecules/confirmation-modal/confirmation-modal"
import { MainContext } from '../../main.context'


export interface UseAnswerActions {

  handleLOpenModal: () => void  
}

export const Modal = () => {
  const context = useContext(MainContext)


const openModal = useCallback((): void => {
    context?.openPopup(
      'notification',
      'title',
      {
        onConfirmation: async () => {
          return context.closePopup()
        },
        onCancellation: context.closePopup,
        // content: t('answer.modal.accept.confirm', { ns: 'question' }),
        content: "content",
        isCloseable: true,
        autoClose: false,
      },
      ConfirmationModal
    )
  }, [context])

const handleOpenModal = useCallback(async () => {
    try {
      openModal()
    } catch (e) {
      console.error(e)
    }
  }, [openModal])



  return {
    handleOpenModal,
  }

}