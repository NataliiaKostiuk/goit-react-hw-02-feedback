import {BtnContainer,Btn} from './feedback-options.styled'
export const FeedbackOptions = ({ onAddFeedback }) => {
  
          return (<BtnContainer>
          <Btn onClick={onAddFeedback}>good</Btn>
            <Btn onClick={onAddFeedback} >neutral</Btn>
              <Btn onClick={onAddFeedback}>bad</Btn>
              </BtnContainer >)
}
   
