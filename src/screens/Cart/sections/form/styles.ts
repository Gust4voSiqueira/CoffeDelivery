import styled from "styled-components";

export const FormContainer = styled.section`
  margin-top: 40px;
  width: 100%;

form {
  background-color: ${props => props.theme['gray-200']};
  border-radius: 10px;
  padding: 30px 50px;
  margin-top: 15px;

  header {
    display: flex;
    margin-bottom: 50px;

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

  input {
    font-size: 1rem;
    background-color: ${props => props.theme['gray-50']};
    padding: 15px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid ${props => props.theme['gray-300']};
  }
}
`

export const InputNumber = styled.div`
  width: 35%;
`

export const InputComplementContainer = styled.div`
  width: 63%;
`

export const InputNumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CartSelectContainer = styled.div`
  background-color: ${props => props.theme['gray-200']};
  border-radius: 10px;
  padding: 30px 50px;
  margin-top: 15px;

  header {
    display: flex;
    margin-bottom: 50px;

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

    background-color: ${props => props.theme['gray-300']};
    padding: 15px 20px;
    width: 200px;
    font-size: 0.8rem;
    border-radius: 10px;
    color: ${props => props.theme['gray-800']};
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