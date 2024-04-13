// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.way},
    ${props => props.gradient1},
    ${props => props.gradient2}
  );
  min-height: 100vh;
  padding: 20px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
  font-weight: 700;
  color: #ededed;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const MiddleHeading = styled.p`
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 500;
  color: #ededed;
  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`
export const UnorderList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    height: 120px;
    width: 120px;
    margin-right: 30px;
  }
`
export const ColorLabel = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: #ededed;
  margin-bottom: 0px;
`

export const ColorInput = styled.input`
  width: 100%;
  padding: 0px;
  height: 40px;
  cursor: pointer;
  border: 1px solid #334155;
  outline: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    height: 50px;
  }
`
export const GenerateButton = styled.button`
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  color: #1e293b;
  background-color: #00c9b7;
  height: 40px;
  width: 150px;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 180px;
    font-size: 20px;
  }
`
