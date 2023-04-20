import { useContext } from 'react'
import { CartContext } from '../../../../../contexts/CartContext'
import {
  ButtonConfirmRequest,
  CompleteOrder,
  ProductsToCartContainer,
} from './styles'
import { CardProductCart } from '../cardProductCart'
import { Product } from '../../../../../reducers/cart/reducer'

interface IHandleCardCart {
  products: Product[]
  handleAlterQuantitieCart: (id: number, newQuantitie: number) => void
  handleRemoveCart: (id: number) => void
}

function HandleCardCart({
  products,
  handleAlterQuantitieCart,
  handleRemoveCart,
}: IHandleCardCart) {
  return (
    <div>
      {products
        .slice()
        .sort((a, b) => a.id - b.id)
        .map((productCart) => (
          <CardProductCart
            key={productCart.id}
            productCart={productCart}
            handleAlterQuantitieCart={handleAlterQuantitieCart}
            handleRemoveCart={handleRemoveCart}
          />
        ))}
    </div>
  )
}

interface ICartSection {
  onConfirmRequest: () => void
}

export function convertMoney(number: number) {
  return number
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .substring(2)
}

export function CartSection({ onConfirmRequest }: ICartSection) {
  const { products, totalValue, handleRemoveCart, handleAlterQuantitie } =
    useContext(CartContext)

  function handleAlterQuantitieCart(id: number, newQuantitie: number) {
    newQuantitie >= 1
      ? handleAlterQuantitie(id, newQuantitie)
      : handleRemoveCart(id)
  }

  return (
    <CompleteOrder>
      <h4>Cafés selecionados</h4>

      <ProductsToCartContainer>
        <HandleCardCart
          products={products}
          handleAlterQuantitieCart={handleAlterQuantitieCart}
          handleRemoveCart={handleRemoveCart}
        />

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

          <ButtonConfirmRequest onClick={onConfirmRequest}>
            CONFIRMAR PEDIDO
          </ButtonConfirmRequest>
        </footer>
      </ProductsToCartContainer>
    </CompleteOrder>
  )
}
