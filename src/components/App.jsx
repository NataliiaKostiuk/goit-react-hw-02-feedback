import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
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
  
    onAddFeedback = value=> {
      this.setState(prevState => ({
        [value]: prevState[value] + 1,
      }));
  };
  

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback
  }
 
  countPositiveFeedbackPercentage = () => {
    let feedbackPercentage = 0;
    if (this.state.good === 0) {
      return feedbackPercentage = 0;
    }
     else{
      feedbackPercentage = Math.round((100 / this.countTotalFeedback()) * this.state.good);
      return feedbackPercentage
    }
    }
  
    render()
    {
      const options = Object.keys(this.state);
      return (
            <Container>
          <Title/>
          <FeedbackOptions onAddFeedback={this.onAddFeedback} options={ options} />
          <Statictic> Statistic
          <StatisticSet
            {...this.state}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
              />
           </Statictic>
      </Container>
        
      )
      
    }
   
}

