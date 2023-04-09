import styled from "styled-components";

export const InfoProductsContainer = styled.div`
  width: 250px;

  span {
    display: block;
    
    font-size: 1.4rem;
    color: ${props => props.theme['gray-900']};
    text-align: start;
  }

  footer {
    display: flex;
    justify-content: space-between;
    width: 240px;
    margin-top: 10px;
  }
`

export const CompleteOrder = styled.section`
  margin-top: 40px;
  width: 45%;
`

const BaseQuantitie = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  background-color: ${props => props.theme['gray-300']};

  span {
    margin: 0 10px;
    color: ${props => props.theme['black-100']};
  }
`

export const ContQuantitie = styled(BaseQuantitie)`
  width: 110px;
  
  span {
    font-size: 1.2rem;
  }

  button {
    padding: 15px 10px;
    background-color: ${props => props.theme['gray-300']};
    border-radius: 10px;

    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: ${props => props.theme['gray-400']};
  }
`

export const TrashContainer = styled(BaseQuantitie)`
  transition: 0.3s;
  padding: 15px 10px;

  span {
    font-size: 1rem;
  }

  :hover {
    background-color: ${props => props.theme['gray-400']};
    cursor: pointer;
  }
`

export const ProductsToCartContainer = styled.div`
background-color: ${props => props.theme['gray-200']};
border-radius: 10px;
padding: 30px 50px;
margin-top: 15px;
width: 80%;

footer {
  margin-top: 20px;

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.9rem;
      margin-bottom: 15px;
      color: ${props => props.theme['gray-800']};
    }

    span {
      font-size: 0.9rem;
      color: ${props => props.theme['gray-800']};
    }

    h4 {
      color: ${props => props.theme['gray-900']};
    }
  }
}
`

export const TotalValueContainer = styled.div`
  display: flex;
  align-items: end;
  height: 80px;

  margin-left: 10px;

  h4 {
    width: 130px;
    color: ${props => props.theme['gray-800']};
}
`

export const CartCard = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme['gray-300']};
  padding: 20px 0;
`

export const ButtonConfirmRequest  = styled.button`
  width: 100%;
  color: ${props => props.theme['white']};
  font-size: 0.9rem;
  font-weight: bold;
  padding: 15px 0;
  border-radius: 5px;
  margin-top: 15px;
  background-color: ${props => props.theme['yellow-300']};
  transition: 0.3s;

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme['yellow-400']};
  }
`