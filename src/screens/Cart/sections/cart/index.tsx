import { Minus, Plus, Trash } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../../../../contexts/CartContext"
import { ButtonConfirmRequest, CartCard, CompleteOrder, ContQuantitie, InfoProductsContainer, ProductsToCartContainer, TotalValueContainer, TrashContainer } from "./styles"

export function CartSection() {
  const { products, totalValue, handleRemoveCart, handleAlterQuantitie } = useContext(CartContext)

  function convertMoney(number: number) {
    return number.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).substring(2)
  }  
  

  function handleAlterQuantitieCart(id: number, newQuantitie: number) {
    newQuantitie >= 1 ? handleAlterQuantitie(id, newQuantitie) : handleRemoveCart(id)
  }

  return (
    <CompleteOrder>
          <h4>Cafés selecionados</h4>

          <ProductsToCartContainer>
          {products.slice().sort((a, b) => a.id - b.id).map(productCart => (
            <CartCard key={productCart.id}> 
              <img src={productCart.image} alt="" />

              <InfoProductsContainer>
                <span>{productCart.name}</span>

                <footer>
                  <ContQuantitie>
                    <button onClick={() => handleAlterQuantitieCart(productCart.id, productCart.quantitie - 1)}>
                      {
                        productCart.quantitie === 1
                        ? <Trash size={20} color='#8047F8' />
                        : <Minus size={15} weight="bold" color='#8047F8' />
                      }
                    </button>

                    <span>{productCart.quantitie}</span>

                    <button onClick={() => handleAlterQuantitieCart(productCart.id, productCart.quantitie + 1)}>
                      <Plus size={15} weight="bold" color='#8047F8' />
                    </button>
                    
                  </ContQuantitie>

                  <TrashContainer onClick={() => handleRemoveCart(productCart.id)}>
                    <Trash size={20} color='#8047F8' />
                    <span>REMOVER</span>
                  </TrashContainer>
                </footer>
              </InfoProductsContainer>
              
              <TotalValueContainer>
                <h4>R$ {convertMoney(productCart.price * productCart.quantitie)}</h4>
              </TotalValueContainer>
              
            </CartCard>
          ))}
            
            <footer>
              <div>
                <p>Total de itens</p>
                <span>R$ {convertMoney(totalValue)}</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>
              <div>
                <h4>Total</h4>
                <h4>R$ {convertMoney(totalValue + 3.5)}</h4>
              </div>

              <ButtonConfirmRequest>
                CONFIRMAR PEDIDO
              </ButtonConfirmRequest>
            </footer>
          </ProductsToCartContainer>
        </CompleteOrder>
  )
}