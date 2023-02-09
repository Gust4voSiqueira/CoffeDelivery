import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 25px 0;
`
const BaseButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1rem;

    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;

    cursor: pointer;
  `

  export const ButtonLocation = styled(BaseButton)`
    width: 160px;
    color: ${(props) => props.theme['purple-600']};
    background-color: ${(props) => props.theme['purple-100']};
    
  `
  export const ButtonCart = styled(BaseButton)`
  color: ${(props) => props.theme['yellow-900']};
  background-color: ${(props) => props.theme['yellow-100']};
`