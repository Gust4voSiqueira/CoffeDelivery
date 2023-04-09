import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ButtonCart, Categorie, CategoriesContainer, ContQuantitie, PriceContainer, ProductContainer } from './styles'

interface ProductProps {
  id: number,
  image: string,
  name:  string,
  description: string,
  categories: string[],
  price: number,
  alterQuantitie: (id: number, quantitie: number) => void
}

export function ProductMain({ id, name, image, description, categories, price, alterQuantitie }: ProductProps) {
  const { products, handleRemoveCart, handleAddToCart } = useContext(CartContext)
  const productToCart = products.filter(product => product.id === id)
  const [quantitie, setQuantitie] = useState<number>(productToCart.length ? productToCart[0].quantitie : 0)

  function convertMoney(number: number) {
    return number.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).substring(2)
  }

  function handleAlterQuantitie(id: number, newQuantitie: number) {
    newQuantitie >= 0 && setQuantitie(newQuantitie)
    newQuantitie >= 1 ? alterQuantitie(id, newQuantitie) : handleRemoveCart(id)
  }

  return (
    <ProductContainer>
      <img src={image} alt="Café" />

      <CategoriesContainer>
        {
          categories.map((categorie, index) => <Categorie key={index}>{categorie}</Categorie>
        )}
      </CategoriesContainer>
      
      
      <h3>{name}</h3>
      <p>{description}</p>
     
      <PriceContainer>
        <p>R$<h3>{quantitie === 0 ? convertMoney(price) : convertMoney(price * quantitie)}</h3></p>

        <div>
          <ContQuantitie>
            <button onClick={() => handleAlterQuantitie(id, quantitie - 1)}>
              {
                quantitie === 1 
                ? <Trash size={15} weight="bold" color='#8047F8' />
                : <Minus size={15} weight="bold" color='#8047F8' />
              }
              
            </button>
            
            <span>{quantitie}</span>

            <button onClick={() => handleAlterQuantitie(id, quantitie + 1)}>
              <Plus size={15} weight="bold" color='#8047F8' />
            </button>
          </ContQuantitie>
          
          <button onClick={() => handleAddToCart(id, quantitie)}>
            <ButtonCart>
              <ShoppingCart size={20} weight='fill' />
            </ButtonCart>
            
          </button>
        </div>
      </PriceContainer>
    </ProductContainer>
  )
}