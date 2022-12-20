import { render, screen } from '@testing-library/react'
import { Flex } from './flex'

describe('FlexContainer', () => {
  const childText = 'hello test'
  const testId = 'flex-container'

  it('should render the children', () => {
    render(<Flex testId={testId} children={childText}></Flex>)

    const childElement = screen.getByText(childText)

    expect(childElement).toBeInTheDocument()
  })

  it('should apply props', () => {
    render(
      <Flex
        color="red"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        border="1px solid black"
        testId={testId}
        children={childText}
      ></Flex>
    )

    const childElement = screen.getByText(childText)

    expect(childElement).toHaveStyle(
      'color: red; align-items: center; justify-content: center; flex-direction: column; border: 1px solid black'
    )
  })
})
