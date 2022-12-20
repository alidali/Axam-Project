import React from 'react'
import styled from 'styled-components'

export interface GreyCardProps {
  children: React.ReactNode
  padding?: string
}

interface StyledGreyCardProps {
  padding?: string
}

export const StyledGreyCard = styled.div<StyledGreyCardProps>`
  display: block;
  background: #f7f7f7;
  box-shadow: 0 3px 3px 1px rgb(0 0 0 / 20%);
  overflow: hidden;
  border-radius: 0px;
  min-height: 100px;
  @media screen and (min-width: 576px) {
    display: block;
    margin: 0px;
    padding: 0px 0px;
  }
  @media screen and (min-width: 768px) {
    margin: 0px;
    padding: 10px 20px;
    border-radius: 8px;
  }
  @media screen and (min-width: 992px) {
    padding: 20px 100px;
  }
`

/**
 * Display Grey card container
 * @param {React.ReactNode} children child component display in the card
 * @param {string} padding padding for the component 20px by default
 */
export function GreyCard({ children }: GreyCardProps) {
  return <StyledGreyCard data-testid="grey-card">{children}</StyledGreyCard>
}

export default GreyCard
