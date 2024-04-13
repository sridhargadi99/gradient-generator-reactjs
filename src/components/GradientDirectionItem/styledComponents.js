// Style your elements here
import styled from 'styled-components'

export const EachList = styled.li`
  list-style-type: none;
  margin-right: 20px;
  margin-bottom: 20px;
`
export const DirectionButton = styled.button`
  width: 150px;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #014f7b;
  background-color: ${props => (props.isActive ? '#ededed' : '#ffffff79')};
  opacity:${props => (props.isActive ? 1 : 0.5)}
  height: 40px;
  border: none;
  cursor: pointer;
  outline: none;
  flex-grow: 1;
  padding:10px 20px 10px 20px;
`
