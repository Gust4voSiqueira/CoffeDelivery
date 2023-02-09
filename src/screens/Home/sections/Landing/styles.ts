import styled from "styled-components";

export const LandingContainer = styled.div`
display: flex;
justify-content: space-between;
min-height: 80vh;

img {
  margin: auto 0;
}
`

export const TextContainer = styled.div`
width: 50%;
margin: auto 0;

h1 {
  font-size: 4.2rem;
  margin-bottom: 20px;
  line-height: 70px;
}

p {
  font-size: 1.5rem;
  width: 80%;
  color: ${props => props.theme['gray-900']};
}
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 70px;
  height: 100px;

  font-size: 1.3rem;
  color: ${props => props.theme['gray-800']};

  div {
    width: 400px;
    font-size: 1.3rem;
    display: inline-flex;
    align-items: center;
    margin-bottom: 20px;
  }
`

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

export const TimerContainer = styled(ContainerBase)`
  background-color: ${props => props.theme['yellow-300']};
`

export const PackageContainer = styled(ContainerBase)`
  background-color: ${props => props.theme['gray-800']};
`

export const CoffeContainer = styled(ContainerBase)`
  background-color: ${props => props.theme['purple-500']};
`