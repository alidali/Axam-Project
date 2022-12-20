import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GreyCard } from './grey-card'

const ChildMock = () => {
  return <h1>Hello world</h1>
}

describe('GreyCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GreyCard children={<ChildMock />} />)
    expect(baseElement).toBeTruthy()
  })

  it('should display the children inside the Card', () => {
    render(
      <GreyCard>
        <ChildMock />
      </GreyCard>
    )
    const childElement = screen.getByText(/hello world/i)

    expect(childElement).toBeInTheDocument()
  })

  it('should display multiple children inside the Card', () => {
    const ChildMock2 = () => {
      return <h1>Hello mundo</h1>
    }

    render(
      <GreyCard>
        <ChildMock />
        <ChildMock2 />
      </GreyCard>
    )

    const child1Element = screen.getByText(/hello world/i)
    const child2Element = screen.getByText(/hello mundo/i)

    expect(child1Element).toBeInTheDocument()
    expect(child2Element).toBeInTheDocument()
  })
})
