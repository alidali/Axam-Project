import styled from 'styled-components'

export interface FlexProps {
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
  alignItems?: Omit<FlexProps['justifyContent'], 'left' | 'right'>
  alignSelf?: Omit<FlexProps['justifyContent'], 'left' | 'right'>
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  position?: 'absolute' | 'relative' | 'sticky' | 'static'
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  color?: string
  padding?: string
  cursor?: 'pointer' | 'auto'
  border?: string
  borderRight?: string
  borderLeft?: string
  borderBottom?: string
  borderTop?: string
  height?: string
  width?: string
  children: React.ReactNode
  testId?: string
}

export const StyledFlex = styled.div<Omit<FlexProps, 'children'>>`
  display: flex;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  position: ${(props) => props.position};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
`

/**
 * Render a flex container
 */
export function Flex(props: FlexProps) {
  return (
    <StyledFlex data-testid={props.testId} {...props}>
      {props.children}
    </StyledFlex>
  )
}
