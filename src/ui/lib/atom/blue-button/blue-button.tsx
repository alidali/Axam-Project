import styled from 'styled-components'

export interface BlueButtonProps {
  onClick?: () => unknown
  children: string
  width?: string
  height?: string
  fontSize?: string
  borderRadius?: string
}

const StyledBlueButton = styled.button<BlueButtonProps>`
  height: ${(props) => (props.height ? props.height : '40px')};
  width: ${(props) => (props.width ? props.width : 'max-content')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '20px')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '40px')};
  background: #005e9f;
  position: relative;
  z-index: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  flex-direction: row;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  color: #fff;
  border: 1px solid transparent;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
  padding: 7px 25px;

  &::after {
    top: 0;
    left: -35%;
    width: 0;
    height: 100%;
    transition-duration: 0.6s;
    transform: skew(50deg);
    transform-origin: top left;
    background-color: #297bc5;
  }

  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    content: '';
    background-color: #297bc5;
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
 * Renders a blue button with label and onClick
 *
 * @param {string} label the text of the button
 * @param {() => unknown} onClick action when button is clicked
 * @returns {ReactElement}
 */
export function BlueButton({
  children,
  onClick,
  borderRadius,
  fontSize,
  height,
  width,
}: BlueButtonProps) {
  return (
    <StyledBlueButton
      borderRadius={borderRadius}
      fontSize={fontSize}
      width={width}
      height={height}
      onClick={onClick}
      data-testid="blue-button"
    >
      {children}
    </StyledBlueButton>
  )
}

export default BlueButton
