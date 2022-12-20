import { render } from '@testing-library/react'

import ConfirmationModal from './confirmation-modal'

const mData = {
  onConfirmation: jest.fn(),
  onCancellation: jest.fn(),
  content: 'test',
}

describe('ConfirmationModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConfirmationModal data={mData} />)
    expect(baseElement).toBeTruthy()
  })
})
