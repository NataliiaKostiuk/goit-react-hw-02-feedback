import { ItemStatistic } from './statistic.styled';
import { Notification } from 'components/notificationMessage/notificationMessage';
export const StatisticSet = ({ good, neutral, bad , countTotalFeedback, countPositiveFeedbackPercentage  }) => {
    if (countTotalFeedback({ good, neutral, bad }) > 0) {
        return (
            <div>
                <ItemStatistic>Good:{good}</ItemStatistic>
                <ItemStatistic>Neutral:{neutral}</ItemStatistic>
                <ItemStatistic>Bad:{bad}</ItemStatistic>
                <ItemStatistic>Total:{countTotalFeedback({ good, neutral, bad })}</ItemStatistic>
                <ItemStatistic>Positive feedback:{countPositiveFeedbackPercentage(countTotalFeedback, { good, neutral, bad })}%</ItemStatistic>
            </div>
        )
    }
    else {
        return (<Notification message="There is no feedback" />)
    }
}

