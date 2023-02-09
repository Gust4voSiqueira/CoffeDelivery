import Logo from '../../assets/Logo.svg'
import { ButtonCart, ButtonLocation, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Header() {
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
            <ShoppingCart size={25} weight="fill" />
          </ButtonCart>
        </Link>
        
      </div>
    </HeaderContainer>
  )
}