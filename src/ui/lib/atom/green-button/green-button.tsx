import styled from 'styled-components'

export interface GreenButtonProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  width?: string
  height?: string
  fontSize?: string
  dataTestId?: string
}

const StyledGreenButton = styled.button<GreenButtonProps>`
  height: ${(props) => (props.height ? props.height : '40px')};
  width: ${(props) => (props.width ? props.width : 'max-content')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '20px')};
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
  min-width: 60px;

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
/**
 * Display a green button white blue animation on hover
 * @param {string | string[]} children children display inside the button
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClick fonction trigger when the button is clicked
 * @param {string} width width of the button
 * @param {string} height height of the button
 * @param {string} dataTestId testId passed to the button element
 * @param {string} fontSize className passed to the button element
 * @returns
 */
export function GreenButton({
  children,
  onClick,
  height,
  width,
  fontSize,
  dataTestId,
}: GreenButtonProps) {
  return (
    <StyledGreenButton
      data-testid={dataTestId}
      height={height}
      width={width}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </StyledGreenButton>
  )
}

export default GreenButton
