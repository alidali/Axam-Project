import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Spacer } from './spacer'

describe('Spacer', () => {
  const testId = 'spacer'
  const width = 10
  const height = 10

  it('should render successfully', () => {
    const { getByTestId } = render(<Spacer dataTestId={testId} />)
    expect(getByTestId(testId)).toBeTruthy()
  })
  describe('Given a width but no height', () => {
    it('should return the correct width and 0px height', () => {
      const { getByTestId } = render(<Spacer dataTestId={testId} width={width} />)
      const component = getByTestId(testId)
      const styles = getComputedStyle(component)
      expect(styles.width).toBe(`${width}px`)
      expect(styles.height).toBe(`0px`)
    })
  })
  describe('Given a height but no width', () => {
    it('should take given height', () => {
      const { getByTestId } = render(<Spacer dataTestId={testId} height={height} />)
      const component = getByTestId(testId)
      const styles = getComputedStyle(component)
      expect(styles.width).toBe(`0px`)
      expect(styles.height).toBe(`${height}px`)
    })
  })
  describe('Given a height and a width', () => {
    it('should take given height and width', () => {
      const { getByTestId } = render(
        <Spacer dataTestId={testId} height={height} width={width} />
      )
      const component = getByTestId(testId)
      const styles = getComputedStyle(component)
      expect(styles.width).toBe(`${width}px`)
      expect(styles.height).toBe(`${height}px`)
    })
  })
})
