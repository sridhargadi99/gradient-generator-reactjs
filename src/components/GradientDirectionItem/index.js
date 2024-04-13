// Write your code here
import {EachList, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachList, changeGradientDirection, isActive} = props
  const {displayText, value} = eachList

  const clickDirectionButton = () => {
    changeGradientDirection(value)
  }

  return (
    <EachList>
      <DirectionButton
        type="button"
        onClick={clickDirectionButton}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </EachList>
  )
}
export default GradientDirectionItem
