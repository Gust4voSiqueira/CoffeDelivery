import { ProductMain } from '../../../../components/ProductMain'
import { MainContainer, ProductsContainer } from './styles'
import { useContext } from 'react'
import { Products } from '../../../../../database/Products'
import { CartContext } from '../../../../../contexts/CartContext'

export function Main() {
  const { handleAlterQuantitie } = useContext(CartContext)

  return (
    <MainContainer>
      <h2>Nossos cafés</h2>

      <ProductsContainer>
        {Products.map((product) => (
          <ProductMain
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            categories={product.categories}
            image={product.image}
            price={product.price}
            alterQuantitie={handleAlterQuantitie}
          />
        ))}
      </ProductsContainer>
    </MainContainer>
  )
}
