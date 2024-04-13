import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  FormContainer,
  MainHeading,
  MiddleHeading,
  UnorderList,
  InputContainer,
  ColorContainer,
  ColorLabel,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    colorLabel1: '#8ae323',
    colorLabel2: '#014f7b',
    changeColorLabel1: '#8ae323',
    changeColorLabel2: '#014f7b',
    changeDirection: gradientDirectionsList[0].value,
  }

  changeInputValue1 = event => this.setState({colorLabel1: event.target.value})

  changeInputValue2 = event => this.setState({colorLabel2: event.target.value})

  changeGradientDirection = content => {
    this.setState({direction: content})
  }

  onGenerateGradient = event => {
    event.preventDefault()
    const {direction, colorLabel1, colorLabel2} = this.state

    this.setState({
      changeDirection: direction,
      changeColorLabel1: colorLabel1,
      changeColorLabel2: colorLabel2,
    })
  }

  renderDirection = () => {
    const {direction} = this.state
    return (
      <>
        <MiddleHeading>Choose Direction</MiddleHeading>
        <UnorderList>
          {gradientDirectionsList.map(eachList => (
            <GradientDirectionItem
              key={eachList.directionId}
              eachList={eachList}
              changeGradientDirection={this.changeGradientDirection}
              isActive={direction === eachList.value}
            />
          ))}
        </UnorderList>
      </>
    )
  }

  renderColorContainer = () => {
    const {colorLabel1, colorLabel2} = this.state
    return (
      <>
        <MiddleHeading>Pick The Colors</MiddleHeading>
        <InputContainer>
          <ColorContainer>
            <ColorLabel>{colorLabel1}</ColorLabel>
            <ColorInput
              type="color"
              value={colorLabel1}
              onChange={this.changeInputValue1}
            />
          </ColorContainer>
          <ColorContainer>
            <ColorLabel>{colorLabel2}</ColorLabel>
            <ColorInput
              type="color"
              value={colorLabel2}
              onChange={this.changeInputValue2}
            />
          </ColorContainer>
        </InputContainer>
      </>
    )
  }

  render() {
    const {changeDirection, changeColorLabel1, changeColorLabel2} = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        way={changeDirection}
        gradient1={changeColorLabel1}
        gradient2={changeColorLabel2}
      >
        <FormContainer onSubmit={this.onGenerateGradient}>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          {this.renderDirection()}
          {this.renderColorContainer()}
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
