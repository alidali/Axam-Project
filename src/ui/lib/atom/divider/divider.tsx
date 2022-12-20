import styled from 'styled-components'

/* eslint-disable-next-line */
export interface DividerProps {}

const StyledDivider = styled.div<DividerProps>`
  border-bottom: 1px solid #ccc;
  margin: 0px;
  padding: 0;
`

export function Divider(props: DividerProps) {
  return <StyledDivider />
}
