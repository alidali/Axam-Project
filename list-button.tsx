import styled from 'styled-components'

/* eslint-disable-next-line */
export interface ListButtonProps {
  isActive: boolean
  children: React.ReactNode
  onClick: () => void
  onBlur?: () => void
}

export interface StyledButtonProps {
  isActive: boolean
}

const StyledListButton = styled.button<StyledButtonProps>`
  align-items: center;
  border-radius: 0;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  height: 30px;
  justify-content: center;
  min-width: 100px;
  width: 100%;
  padding: 0px 15px;
  right: 0;
  border: 0;
  top: 0;
  color: ${(props) => (props.isActive ? '#fff' : '#005E9F')};
  background: ${(props) => (props.isActive ? '#01d1d0' : 'none')};
  &:hover {
    background: #01d1d0;
    svg,
    p {
      color: #fff;
    }
  }
  p,
  svg {
    color: ${(props) => (props.isActive ? '#fff' : '#005E9F')};
    white-space: nowrap;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    border-radius: 20px;
  }
`

export function ListButton({
  isActive,
  children,
  onClick,
  onBlur,
}: ListButtonProps) {
  return (
    <StyledListButton isActive={isActive} onClick={onClick} onBlur={onBlur}>
      {children}
    </StyledListButton>
  )
}

export default ListButton
