import styled from 'styled-components'

export const SuccessContainer = styled.div`
  min-height: 89vh;
  display: flex;
  justify-content: space-between;
`

export const ConfirmedOrder = styled.div`
  h1 {
    font-size: 2.3rem;
    color: ${(props) => props.theme['yellow-900']};
    font-weight: 800;
  }

  span {
    font-size: 1.3rem;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const RequestedReport = styled.div`
  margin-top: 45px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 2px solid transparent;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 35vh;
  width: 30vw;

  p,
  span {
    font-size: 1.2rem;
    width: 100%;
    color: ${(props) => props.theme['gray-800']};
  }

  span {
    font-weight: bold;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: end;
  width: 40vw;
  height: 50vh;

  img {
    width: 550px;
  }
`
