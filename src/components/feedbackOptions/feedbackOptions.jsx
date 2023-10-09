import { BtnContainer, Btn } from './feedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onAddFeedback }) => {
  return (
    <BtnContainer>
       {options.map(option => {
        return (
          <Btn
            type="button"
            name={option}
            key={nanoid()}
            onClick={(e)=>onAddFeedback(e.target.name)}
          >
            {option}
          </Btn>
        );
      })} 
    </BtnContainer>
  );
   
}
