import styled from 'styled-components'

const BaseQuantitie = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  background-color: ${(props) => props.theme['gray-300']};

  span {
    margin: 0 10px;
    color: ${(props) => props.theme['black-100']};
  }
`

export const ContQuantitie = styled(BaseQuantitie)`
  width: 110px;

  span {
    font-size: 1.2rem;
  }

  button {
    padding: 15px 10px;
    background-color: ${(props) => props.theme['gray-300']};
    border-radius: 10px;

    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: ${(props) => props.theme['gray-400']};
  }
`

export const TrashContainer = styled(BaseQuantitie)`
  transition: 0.3s;
  padding: 15px 10px;

  span {
    font-size: 1rem;
  }

  :hover {
    background-color: ${(props) => props.theme['gray-400']};
    cursor: pointer;
  }
`

export const TotalValueContainer = styled.div`
  display: flex;
  align-items: start;
  height: 80px;

  margin-left: 10px;

  span {
    font-weight: bold;
    font-size: 18px;
    width: 130px;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const CartCard = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};
  padding: 20px 0;
  width: 100%;

  img {
    margin-right: 15px;
  }
`
