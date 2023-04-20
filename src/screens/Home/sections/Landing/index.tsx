import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Footer, LandingContainer, TextContainer } from "./styles";

import Image from '../../../../assets/image-landing.svg'
import { Card } from "../../../../components/Card/card";

export function Landing() {
  return (
    <LandingContainer>
      <TextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
      
        <Footer>
          <Card
            color="IconYellow"
            icon={<ShoppingCart size={22} weight="fill" />}
          >
            <p>Compra simples e segura</p>
          </Card>
          
          <Card
            color="IconOrange"
            icon={<Package size={22} weight="fill" />}
          >
            <p>Embalagem mantém o café intacto</p>
          </Card>

          <Card
            color="IconYellow"
            icon={<Timer size={22} weight="fill" />}
          >
            <p>Entrega rápida e rastreada</p>
          </Card>

          <Card
            color="IconPurple"
            icon={<Coffee size={22} weight="fill" />}
          >
            <p>O café chega fresquinho até você</p>
          </Card>
        </Footer>
      </TextContainer>
      <img src={Image} alt="Café" />
    </LandingContainer>
  )
}