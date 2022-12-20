import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/react'
import GreenButton from './green-button'

describe('IconAtom', () => {
  const handleClick = jest.fn()
  const Button = (
    <GreenButton width="50px" height="30px" onClick={handleClick} dataTestId="test">
      test
    </GreenButton>
  )
  it('should render successfully', () => {
    const { baseElement } = render(Button)
    expect(baseElement).toBeTruthy()
  })

  it('Should render successfuly with props', () => {
    render(Button)
    const element = screen.getByTestId('test')
    expect(getComputedStyle(element).width).toBe('50px')
    expect(getComputedStyle(element).height).toBe('30px')
  })
  it('should calls onClick prop when clicked', () => {
    render(Button)
    const element = screen.getByTestId('test')
    fireEvent.click(element)
    expect(handleClick).toBeCalledTimes(1)
  })
})
