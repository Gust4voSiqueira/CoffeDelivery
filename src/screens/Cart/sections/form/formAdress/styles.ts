import styled from "styled-components";

export const FormContainer = styled.section`
  margin-top: 40px;
  width: 90%;

form {
  background-color: ${props => props.theme['gray-200']};
  border-radius: 10px;
  padding: 30px 40px;
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

  .errorInput {
      border: 1px solid ${props => props.theme['red-500']};
  }

  .errorInput::placeholder {
      color: ${props => props.theme['red-500']};
  }
}
`

export const InputNumber = styled.div`
  width: 35%;
`

export const InputComplementContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 63%;

  div {
    display: flex;
    justify-content: space-between;

    .inputCity {
      width: 330%;
      margin-right: 15px;
    }
  }
`

export const InputNumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`