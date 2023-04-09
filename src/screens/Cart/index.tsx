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