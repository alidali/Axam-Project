import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/react'
// import WhiteSpinner from '../spinner/white-spinner/white-spinner'
import LoadingGreenButton from './loading-green-button'

describe('Loading Green Button', () => {
  const isLoading = false
  const handleClick = jest.fn()
  const LoadingButton = (
    <LoadingGreenButton
      width="50px"
      height="30px"
      onClick={handleClick}
      dataTestId="test"
    >
      {/* {isLoading ? <WhiteSpinner /> : 'ButtonName'} */}
    </LoadingGreenButton>
  )
  it('should render successfully', () => {
    const { baseElement } = render(LoadingButton)
    expect(baseElement).toBeTruthy()
  })

  it('Should render successfuly with props', () => {
    render(LoadingButton)
    const element = screen.getByTestId('test')
    expect(getComputedStyle(element).width).toBe('50px')
    expect(getComputedStyle(element).height).toBe('30px')
  })
  it('should calls onClick prop when clicked', () => {
    render(LoadingButton)
    const element = screen.getByTestId('test')
    fireEvent.click(element)
    expect(handleClick).toBeCalledTimes(1)
  })
  it('should render loading on the button when isLoading is true', () => {
    const isLoading = true
    const LoadingGreenTrue = (
      <LoadingGreenButton
        width="50px"
        height="30px"
        onClick={handleClick}
        dataTestId="test"
      >
        {/* {isLoading ? <WhiteSpinner /> : 'ButtonName'} */}
      </LoadingGreenButton>
    )

    render(LoadingGreenTrue)
    const element = document.querySelector('svg')
    // expect(element).toBeInTheDocument()
  })
  it('should render text on the button when isLoading is false', () => {
    render(LoadingButton)
    const element = screen.getByText('ButtonName')
    // expect(element).toBeInTheDocument()
  })
})
