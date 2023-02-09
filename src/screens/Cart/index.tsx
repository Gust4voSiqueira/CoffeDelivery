import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartSection } from "./sections/cart";
import { Form } from "./sections/form";
import { CartContainer } from "./styles";


export function Cart() {
  return (
    <>
      <CartContainer>
        <Form />
        <CartSection />
      </CartContainer>
    </>
  )
}