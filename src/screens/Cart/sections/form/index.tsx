import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { ButtonsPaymentContainer, CartSelectContainer, FormContainer, InputComplementContainer, InputNumber, InputNumbersContainer } from "./styles";


export function Form() {
  return (
    <div style={{ 'width': '45%' }}>
        <FormContainer>
          <h4>Complete seu pedido</h4>
          <form>
            <header>
              <MapPinLine size={25} color="#C47F17" />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <InputNumber>
              <input placeholder="CEP" />
            </InputNumber>

            <input placeholder="Rua" />
            
            <InputNumbersContainer>
              <InputNumber>
                <input placeholder="Número" />
                <input placeholder="Bairro" />
              </InputNumber>

              <InputComplementContainer>
                <input placeholder="Complemento" />

                <div>
                  <input placeholder="Cidade" style={{ "display": "inline-flex", 'width': "285px", 'marginRight': '10px'  }} />
                  <input placeholder="UF" style={{ "display": "inline-flex", 'width': "100px" }} />
                </div>
              </InputComplementContainer>
            </InputNumbersContainer>
          </form>
        </FormContainer>

          <CartSelectContainer>
            <header>
              <CurrencyDollar size={25} color="#8047F8" />
              <div>
                <span>Pagamento</span>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </header>

            <ButtonsPaymentContainer>
            <button>
              <CreditCard size={25} color="#8047F8" style={{ 'marginRight': '10px' }} />
              CARTÃO DE CRÉDITO
            </button>

            <button>
              <Bank size={25} color="#8047F8" style={{ 'marginRight': '10px' }} />
              CARTÃO DE DÉBITO
            </button>

            <button>
              <Money size={25} color="#8047F8" style={{ 'marginRight': '10px' }} />
              DINHEIRO
            </button>
            </ButtonsPaymentContainer>
        </CartSelectContainer>
        </div>
  )
}