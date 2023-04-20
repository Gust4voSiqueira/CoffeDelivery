import styled from 'styled-components'

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
    width: 90%;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 70px;
  height: 100px;
  width: 800px;

  font-size: 1.3rem;
  color: ${(props) => props.theme['gray-800']};

  div {
    width: 400px;
    font-size: 1.3rem;
    display: inline-flex;
    align-items: center;
    margin-bottom: 20px;
  }

  p,
  span {
    font-size: 1.2rem;
    width: 100%;
    color: ${(props) => props.theme['gray-800']};
  }
`
