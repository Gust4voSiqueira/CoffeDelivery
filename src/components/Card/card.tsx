import React from "react"
import { CardContainer, IconContainer, color } from "./styles"

interface ICard {
  icon: React.ReactNode,
  children: React.ReactNode,
  color: color,
}

export function Card({ icon, children, color }: ICard) {
  return (
    <CardContainer>
      <IconContainer color={color}>
        {icon}
      </IconContainer>

      <div>
        {children}
      </div>
    </CardContainer>
  )
}
