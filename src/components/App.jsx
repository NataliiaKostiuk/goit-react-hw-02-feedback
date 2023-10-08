import { FeedbackOptions } from './feedback-options/feedback-options';
import { Component } from 'react';
import { StatisticSet } from './statistic/statistic';
import { Title } from './title/title';
import {Container, Statictic} from './app.styled'
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  onAddFeedback = (e) => {
    this.setState((prev) => {
      if (e.target.textContent === 'good') {
        return {
          good: prev.good + 1
        }
      }
      if (e.target.textContent === 'neutral') {
        return {
          neutral: prev.neutral + 1
        }
      }
      if (e.target.textContent === 'bad') {
        return {
          bad: prev.bad + 1
        }
      }
    })
  }
  countTotalFeedback = ({ good, neutral, bad }) => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback
  }
 
  countPositiveFeedbackPercentage = (countTotalFeedback, { good, neutral, bad }) => {
    let feedbackPercentage = 0;
    if (good === 0) {
      return feedbackPercentage = 0;
    }
     else{
      feedbackPercentage = Math.round((100 / countTotalFeedback({ good, neutral, bad })) * good);
      return feedbackPercentage
    }
    }
  
    render()
    {
      return (
            <Container>
 
          <Title/>
          <FeedbackOptions onAddFeedback={this.onAddFeedback} />
          <Statictic> Statistic
          <StatisticSet
            state ={this.state}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
              />
           </Statictic>
      </Container>
        
      )
      
    }
   
}

