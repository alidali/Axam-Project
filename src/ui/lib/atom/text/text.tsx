import styled from 'styled-components'

export interface TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'label' | 'p' | 'span'
  fontSize?:
    | '0.8rem'
    | '1rem'
    | '1.4rem'
    | '1.6rem'
    | '1.8rem'
    | '2rem'
    | '20px'
    | '18px'
    | '16px'
    | '14px'
    | '12px'
    | '11px'
    | '10px'
  isBold?: boolean
  isItalic?: boolean
  color?:
    | '#1F1E1E'
    | '#005E9F'
    | '#337AB7'
    | '#0070AD'
    | '#0070ad'
    | '#01d1d0'
    | '#FFFFFF'
    | '#FFF'
    | '#4A4A4AC2'
    | '#BDBDBD'
    | '#AAAAAA'
    | '#858788'
    | '#C91924'
    | '#4a4a4a'
    | 'inherit'
  dataTestId?: string
  margin?: string
  children: string
  padding?: string
}
const StyledTypography = styled.p<TypographyProps>`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
  font-style: ${(props) => (props.isItalic ? 'italic' : 'normal')};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`
/**
 * Text atom used to display texts (can only be used with strings as children)
 * @param {string}  as type of the HTML element used to reder the text
 * @param {string}  fontSize size of the text (look into the interface to check the list of available values)
 * @param {Boolean} isBold whether or not the text is bold
 * @param {Boolean} isItalic whether or not the text is in italic
 * @param {string}  color color of the text (look into the interface to check the list of available values)
 * @param {string}  padding padding of the text
 * @param {string}  margin margin of the text
 * @param {string}  dataTestId used in testing
 * @param {string}  children text to be displayed
 */
export function Text({
  as = 'p',
  fontSize = '14px',
  isBold,
  isItalic,
  color = '#1F1E1E',
  dataTestId,
  margin = '0',
  children,
  padding = '0',
}: TypographyProps) {
  return (
    <StyledTypography
      data-testid={dataTestId}
      as={as}
      color={color}
      fontSize={fontSize}
      margin={margin}
      isBold={isBold}
      isItalic={isItalic}
      padding={padding}
    >
      {children}
    </StyledTypography>
  )
}
export function SectionTitle({ children }: { children: string }) {
  return (
    <Text as="h2" fontSize="2rem" color="#1F1E1E">
      {children}
    </Text>
  )
}
export function RequestTitle({ children }: { children: string }) {
  return (
    <Text as="h3" fontSize="1.4rem" color="#FFFFFF">
      {children}
    </Text>
  )
}

export function PageTitle({ children }: { children: string }) {
  return (
    <Text as="h1" fontSize="2rem" isBold={true} color="#005E9F">
      {children}
    </Text>
  )
}
export function NiceAndHotCardTitle({ children }: { children: string }) {
  return (
    <Text as="label" fontSize="1.6rem" isBold={true} color="#FFFFFF">
      {children}
    </Text>
  )
}
export function CardTitle({ children }: { children: string }) {
  return (
    <Text as="h2" fontSize="1.8rem" color="#337AB7">
      {children}
    </Text>
  )
}
export function DialogTitle({ children }: { children: string }) {
  return (
    <Text as="h2" fontSize="2rem" color="#FFFFFF">
      {children}
    </Text>
  )
}
export function MyProfileTitle({ children }: { children: string }) {
  return (
    <Text as="h2" fontSize="2rem" color="#1F1E1E">
      {children}
    </Text>
  )
}

export function UnderlineTitle({ children }: { children: string }) {
  const Underlined = styled.div`
    &::after {
      position: relative;
      bottom: 0;
      left: 0;
      top: 0.8rem;
      display: block;
      width: 20px;
      height: 4px;
      background: #01d1d0;
      content: '';
    }
  `
  return (
    <Underlined>
      <Text as="h2" fontSize="2rem" color="#1F1E1E" isBold={true}>
        {children}
      </Text>
    </Underlined>
  )
}
