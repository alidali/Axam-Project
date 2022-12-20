import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Text } from './text'

describe('Text', () => {
  const testId = 'typography'
  beforeEach(async () => {
    jest.clearAllMocks()
  })
  it('should render successfully with correct style', () => {
    const { baseElement } = render(
      <Text
        as="span"
        dataTestId={testId}
        fontSize="16px"
        color="#FFF"
        isBold={true}
        isItalic={true}
      >
        ceci est un test
      </Text>
    )
    const component = screen.getByTestId(testId)
    expect(component).toHaveStyle(`color: #FFF`)
    expect(component).toHaveStyle(`font-size: 16px`)
    expect(component).toHaveStyle(`font-weight: bold`)
    expect(component).toHaveStyle(`font-style: italic`)

    expect(component).toBeInstanceOf(HTMLSpanElement)
    expect(baseElement).toBeTruthy()
  })
  it('should render successfully with correct default style', () => {
    const { baseElement } = render(
      <Text dataTestId={testId} as="p">
        ceci est un test
      </Text>
    )
    const component = screen.getByTestId('typography')
    expect(component).toHaveStyle(`color: #1F1E1E`)
    expect(component).toHaveStyle(`font-size: 14px`)
    expect(component).toBeInstanceOf(HTMLParagraphElement)
    expect(baseElement).toBeTruthy()
  })
})
