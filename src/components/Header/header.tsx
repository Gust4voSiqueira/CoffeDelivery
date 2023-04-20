import { useContext } from 'react'
import Logo from '../../assets/Logo.svg'
import { ButtonCart, ButtonLocation, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { products } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={Logo} alt="" />
      </Link>

      <div>
        <ButtonLocation> 
              <MapPin size={25} weight="fill" />
          Porto Alegre, RS
        </ButtonLocation>
        <Link to='/cart'>
          <ButtonCart>
            {
              products.length > 0
              && <span>{products.length}</span>
            }
            
            <ShoppingCart size={25} weight="fill" />
          </ButtonCart>
        </Link>
        
      </div>
    </HeaderContainer>
  )
}