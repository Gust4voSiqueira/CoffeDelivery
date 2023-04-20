import styled from "styled-components";

export const CompleteOrder = styled.section`
  margin-top: 40px;
  width: 50%;
`

export const InfoProductsContainer = styled.div`
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
export const ProductsToCartContainer = styled.div`
  background-color: ${props => props.theme['gray-200']};
  border-radius: 10px;
  padding: 30px 50px;
  margin-top: 15px;
  margin-left: auto;
  width: 100%;

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