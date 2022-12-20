import styled from 'styled-components'

/**
 * interface used for the Spacer atom
 * @param {number} width width of the atom
 * @param {number} height height of the atom
 * @param {string} dataTestId used in testing
 */
export interface SpacerProps {
  width?: number
  height?: number
  dataTestId?: string
}

const StyledSpacer = styled.div<SpacerProps>`
  width: ${(props) => (props.width ? props.width : 0)}px;
  height: ${(props) => (props.height ? props.height : 0)}px;
`
/**
 * Atom to create space between 2 elements with a given width and/or height
 * @param {SpacerProps} props
 */
export function Spacer({ width, height, dataTestId }: SpacerProps) {
  return <StyledSpacer width={width} height={height} data-testid={dataTestId} />
}
