import { fireEvent, render, screen } from '@testing-library/react'
import BlueButton from './blue-button'

const label = 'testLabel'
const onClick = jest.fn()

const propsBlueButton = {
  onClick,
}

describe('BlueButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlueButton {...propsBlueButton}>{label}</BlueButton>
    )
    expect(baseElement).toBeTruthy()
  })
  it('should label exist', () => {
    render(<BlueButton {...propsBlueButton}>{label}</BlueButton>)
    const labelBlueButton = screen.getByText(label)
    expect(labelBlueButton).toBeInTheDocument()
  })
  it('onClick should have been called', () => {
    render(<BlueButton {...propsBlueButton}>{label}</BlueButton>)
    const button = screen.getByTestId('blue-button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
