import styled from "styled-components";

export const CartSelectContainer = styled.div`
  background-color: ${props => props.theme['gray-200']};
  border-radius: 10px;
  padding: 30px 40px;
  margin-top: 15px;
  width: 90%;

  header {
    display: flex;
    margin-bottom: 40px;

    div {
    margin-left: 10px;
    }

    span {
    display: block;
    font-size: 1.3rem;
    color: ${props => props.theme['gray-900']};
    margin-bottom: 5px;
    }

    p {
      font-size: 1rem;
      color: ${props => props.theme['gray-800']};
    }
  }
`

export const ButtonsPaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;

    
    padding: 15px;
    width: 230px;
    font-size: 0.8rem;
    border-radius: 10px;
    color: ${props => props.theme['gray-800']};

    border: 1px solid ${props => props.theme['gray-300']};

    transition: 0.3s;

    .iconPayment {
      color: ${props => props.theme['purple-500']};
      margin-right: 10px;
    }
  }

  button:hover {
    background-color: ${props => props.theme['purple-100']};
    border: 1px solid ${props => props.theme['purple-500']};
    cursor: pointer;
  }

  .selectedPayment {
    background-color: ${props => props.theme['purple-100']};
    border: 1px solid ${props => props.theme['purple-500']};
  }

  .error {
    border: 1px solid ${props => props.theme['red-500']};
  }
`

export const CartCard = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  border-bottom: 1px solid ${props => props.theme['gray-300']};
  padding: 20px 0;

  h4 {
    color: ${props => props.theme['gray-800']};
  }
`