import { useContext } from "react";
import { RequestContext } from "../../contexts/RequestContext";

import { ConfirmedOrder, RequestedReport, SuccessContainer, ImageContainer } from "./styles";
import { Card } from "../../components/Card/card";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import successImage from '../../assets/success.svg'

function onPayment(payment: string) {
  if(payment === 'MONEY') {
    return 'Dinheiro'
  } else if(payment === 'CREDIT') {
    return 'Cartão de crédito'
  }

  return 'Cartão de débito'
}

export function Success() {
  const { request } = useContext(RequestContext)
  const { adress } = request

  return (
    <SuccessContainer>
        <ConfirmedOrder>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>

            <RequestedReport>
                <Card
                  color="IconPurple"
                  icon={<MapPin size={22} weight="fill" />}
                >
                <p>Entrega em <span>{adress.road}, {adress.number}</span></p>
                <p>{adress.neighborhood} - {adress.city}, {adress.uf}</p>
              </Card>

              <Card
                color="IconYellow"
                icon={<Timer size={22} weight="fill" />}
              >
                <p>Previsão de entrega</p>
                <span>20 min - 30 min</span>
              </Card>

              <Card
                color="IconOrange"
                icon={<CurrencyDollar size={22} weight="fill"/>}
              >
                <p>Pagamento na entrega</p>
                <span>{onPayment(adress.payment)}</span>
              </Card>
            </RequestedReport>
        </ConfirmedOrder>

        <ImageContainer>
          <img src={successImage} />
        </ImageContainer>
    </SuccessContainer>
  )
}