import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  border-radius: 10px 50px;

  width: 300px;
  background-color: ${props => props.theme['gray-200']};

  img {
    margin-top: -50px;
    width: 120px;
  }

  h3 {
    font-size: 1.4rem;
    color: ${props => props.theme['gray-900']};
  }

  p {
    width: 250px;
    font-size: 1rem;
    text-align: center;
    margin: 15px 0;
    color: ${props => props.theme['gray-100']};
  }
`

export const CategoriesContainer = styled.div`
  display: flex;
`

export const Categorie = styled.span`
  padding: 5px 10px;
  border-radius: 50px;
  margin: 10px 5px;
  font-weight: bold;

  background-color: ${props => props.theme['yellow-100']};
  color: ${props => props.theme['yellow-900']};
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px 0 15px;

  p {
    display: flex;
    align-items: center;

    width: 50%;
    font-size: 1rem;
  }

  h3 {
    margin-left: 5px;
    color: ${props => props.theme['gray-800']};
    font-size: 1.6rem;
  }

  div {
    display: flex;
    align-items: center;
  }
`
export const ContQuantitie = styled.div`
  display: inline-flex;
  font-size: 1.2rem;
  border-radius: 10px;

  background-color: ${props => props.theme['gray-300']};

  span {
    margin: 0 10px;
    color: ${props => props.theme['black-100']};
  }

  button {
    padding: 10px;
    background-color: ${props => props.theme['gray-300']};
    border-radius: 10px;

    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: ${props => props.theme['gray-400']};
  }
`

export const ButtonCart = styled.button`
  border-radius: 10px;
  color: ${props => props.theme['white']};
  padding: 10px;

  margin-left: 10px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme['purple-600']};
  transition: 0.3s;

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme['purple-700']};
  }
`
