import { useTranslation } from 'react-i18next'
// import { ReactElement } from 'react-markdown/lib/react-markdown'
import styled from 'styled-components'
import { Flex, LoadingGreenButton, Spacer, Text, WhiteButton } from '../../atom'

export interface ConfirmationModalProps {
  data: {
    onCancellation: () => void
    onConfirmation: () => Promise<void>
    content: string
  }
}

const StyledConfirmationModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px;

  @media only screen and (min-width: 768px) {
    padding: 25px 10px;
  }
`

/**
 * Displays the body of ae modal with 2 buttons
 * @param {ConfirmationModalProps} props
 * @returns {ReactElement}
 */
export function ConfirmationModal({ data }: ConfirmationModalProps): any {
  const { t } = useTranslation()

  return (
    <StyledConfirmationModal>
      <Spacer height={15} />
      <Text fontSize="1.6rem">{data.content}</Text>
      <Spacer height={20} />
      <Flex alignSelf="flex-end">
        <WhiteButton onClick={data.onCancellation}>NO</WhiteButton>
        <Spacer height={8} width={16} />
        <LoadingGreenButton
          onClick={data.onConfirmation}
          dataTestId="confirmation-submit-button"
        >
          YES
        </LoadingGreenButton>
      </Flex>
    </StyledConfirmationModal>
  )
}

export default ConfirmationModal
