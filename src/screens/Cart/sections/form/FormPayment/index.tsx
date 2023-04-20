import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ButtonsPaymentContainer, CartSelectContainer } from "./styles";
import { IFormData, paymentType } from "../../..";

interface IFormPayment {
  onChangeFunction: (payment: paymentType) => void;
  dataForm: IFormData;
  errors: string[];
}

function isError(errors: string[]) {
  return errors.some(error => error === 'payment')
}

export function FormPayment({ onChangeFunction, dataForm, errors }: IFormPayment) {
  return (
    <CartSelectContainer>
    <header>
      <CurrencyDollar size={25} color="#8047F8" />
      <div>
        <span>Pagamento</span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </div>
    </header>

    <ButtonsPaymentContainer>
    <button 
      name="payment"
      onClick={() => onChangeFunction('CREDIT')}
      className={`${dataForm.payment === 'CREDIT' && 'selectedPayment'} ${isError(errors) && 'error'}`}
      >
      <CreditCard 
        size={25} 
        className="iconPayment" 
      />
      CARTÃO DE CRÉDITO
    </button>

    <button 
      name="payment"
      onClick={() => onChangeFunction('DEBIT')}
      className={`${dataForm.payment === 'DEBIT' && 'selectedPayment'} ${isError(errors) && 'error'}`}
      >
      <Bank
        size={25} 
        className="iconPayment"
      />
      CARTÃO DE DÉBITO
    </button>

    <button 
      name="payment"
      onClick={() => onChangeFunction('MONEY')}
      className={`${dataForm.payment === 'MONEY' && 'selectedPayment'} ${isError(errors) && 'error'}`}
      >
      <Money
        size={25} 
        className="iconPayment" 
      />
      DINHEIRO
    </button>
    </ButtonsPaymentContainer>
</CartSelectContainer>
  )
}