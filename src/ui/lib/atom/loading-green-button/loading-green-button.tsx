import { MutableRefObject, SyntheticEvent, useRef, useState } from 'react'
import styled from 'styled-components'
// import WhiteSpinner from '../spinner/white-spinner/white-spinner'

/* eslint-disable-next-line */
export interface LoadingGreenButtonProps {
  children: React.ReactNode
  onClick?: (e: SyntheticEvent) => Promise<void>
  width?: string
  height?: string
  fontSize?: string
  dataTestId?: string
}

const StyledLoadingGreenButton = styled.button<
  LoadingGreenButtonProps & { ref: MutableRefObject<HTMLButtonElement | null> }
>`
  height: ${(props) => (props.height ? props.height : '30px')};
  width: ${(props) => (props.width ? props.width : 'max-content')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
  background: #01d1d0;
  color: #fff;
  position: relative;
  padding: 0px 20px;
  z-index: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  flex-direction: row;
  border: 1px solid transparent;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::after {
    top: 0;
    left: -35%;
    width: 0;
    height: 100%;
    transition-duration: 0.6s;
    transform: skew(50deg);
    transform-origin: top left;
    background-color: #3498db;
  }
  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    content: '';
    background-color: #3498db;
  }

  &:hover::after {
    width: 135%;
    height: 100%;
  }

  &:hover {
    border: 1px solid #fff;
  }
`

export const LoadingGreenButton = ({
  children,
  onClick,
  height,
  width,
  fontSize,
  dataTestId,
}: LoadingGreenButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handleClick = async (e: SyntheticEvent) => {
    setIsLoading(true)
    setDisabled(true)
    e.preventDefault()
    if (!buttonRef.current) {
      return
    }

    const buttonWidth = buttonRef.current.getBoundingClientRect().width
    buttonRef.current.style.width = `${buttonWidth}px`

    if (onClick) {
      await onClick(e)
    }

    if (buttonRef.current) {
      // This condition is for cases in which the handler is unmounting the component
      setDisabled(false)
      setIsLoading(false)
      buttonRef.current.style.width = ''
    }
  }

  return (
    <StyledLoadingGreenButton
      data-testid={dataTestId}
      height={height}
      width={width}
      fontSize={fontSize}
      onClick={handleClick}
      disabled={disabled}
      ref={buttonRef}
    >
      {/* {isLoading ? <WhiteSpinner /> : children} */}
    </StyledLoadingGreenButton>
  )
}

export default LoadingGreenButton
