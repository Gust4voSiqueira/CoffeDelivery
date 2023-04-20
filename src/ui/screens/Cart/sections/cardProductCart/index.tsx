import { Minus, Plus, Trash } from 'phosphor-react'
import { Product } from '../../../../../reducers/cart/reducer'
import { InfoProductsContainer } from '../cart/styles'
import {
  CartCard,
  ContQuantitie,
  TotalValueContainer,
  TrashContainer,
} from './styles'
import { convertMoney } from '../cart'

interface ICardProductCart {
  productCart: Product
  handleAlterQuantitieCart: (id: number, newQuantitie: number) => void
  handleRemoveCart: (id: number) => void
}

export function CardProductCart({
  productCart,
  handleAlterQuantitieCart,
  handleRemoveCart,
}: ICardProductCart) {
  return (
    <div>
      {
        <CartCard key={productCart.id}>
          <img src={productCart.image} alt="" />

          <InfoProductsContainer>
            <span>{productCart.name}</span>

            <footer>
              <ContQuantitie>
                <button
                  onClick={() =>
                    handleAlterQuantitieCart(
                      productCart.id,
                      productCart.quantitie - 1,
                    )
                  }
                >
                  {productCart.quantitie === 1 ? (
                    <Trash size={20} color="#8047F8" />
                  ) : (
                    <Minus size={15} weight="bold" color="#8047F8" />
                  )}
                </button>

                <span>{productCart.quantitie}</span>

                <button
                  onClick={() =>
                    handleAlterQuantitieCart(
                      productCart.id,
                      productCart.quantitie + 1,
                    )
                  }
                >
                  <Plus size={15} weight="bold" color="#8047F8" />
                </button>
              </ContQuantitie>

              <TrashContainer onClick={() => handleRemoveCart(productCart.id)}>
                <Trash size={20} color="#8047F8" />
                <span>REMOVER</span>
              </TrashContainer>
            </footer>
          </InfoProductsContainer>

          <TotalValueContainer>
            <span>
              R$ {convertMoney(productCart.price * productCart.quantitie)}
            </span>
          </TotalValueContainer>
        </CartCard>
      }
    </div>
  )
}
