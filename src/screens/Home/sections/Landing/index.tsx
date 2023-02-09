import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CartContainer, CoffeContainer, Footer, LandingContainer, PackageContainer, TextContainer, TimerContainer } from "./styles";

import Image from '../../../../assets/image-landing.svg'

export function Landing() {
  return (
    <LandingContainer>
      <TextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
      
        <Footer>
          <div>
            <CartContainer>
              <ShoppingCart size={22} weight="fill" />
            </CartContainer>
            Compra simples e segura
          </div>

          <div>
            <PackageContainer>
              <Package size={22} weight="fill" />
            </PackageContainer>
              Embalagem mantém o café intacto
          </div>

          <div>
            <TimerContainer>
              <Timer size={22} weight="fill" />
            </TimerContainer>
              Entrega rápida e rastreada
          </div>
          
          <div>
            <CoffeContainer>
              <Coffee size={22} weight="fill" />
            </CoffeContainer>
              O café chega fresquinho até você
          </div>
        </Footer>
      </TextContainer>
      <img src={Image} alt="Café" />
    </LandingContainer>
  )
}