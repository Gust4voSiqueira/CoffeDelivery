import styled from "styled-components";

const ContainerBase = styled.button`
  border-radius: 50%;
  padding: 10px;
  color: ${props => props.theme['white']};

  margin-right: 10px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const CartContainer = styled(ContainerBase)`
background-color: ${props => props.theme['yellow-900']};
`

export const MainContainer = styled.section`
min-height: 100vh;

h2 {
  font-size: 2.7rem;
  margin: 70px 0 70px;
  line-height: 70px;
  color: ${props => props.theme['gray-900']};
}
`

export const ProductsContainer = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

min-height: 180vh;
`