import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
`
export type color = 'IconGray' | 'IconPurple' | 'IconYellow' | 'IconOrange'

interface IIconContainerProps {
  color: color
} 

const iconVariant = {
  IconPurple: "#8047F8",
  IconGray: "#574F4D",
  IconYellow: "#DBAC2C",
  IconOrange: '#C47F17',
}

export const IconContainer = styled.div<IIconContainerProps>`
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme['white']};

  ${props => {
    return css`background-color: ${iconVariant[props.color]}`
  }}
`
