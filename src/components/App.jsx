import React, { useState } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from 'components/statistics/Statistics';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';
import css from './App.module.css';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNutral] = useState(0);
    const [bad, setBad] = useState(0);

    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);

    function onClickBtn(evt) {
        switch (evt.target.name) 
        {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            default:
                break;
        }
    }

    return (
        <div className={css.feedbackBox}>
            <Section title="Please leave feedback!">
                <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={onClickBtn} />
            </Section>

            <Section title={'Statistics'}>
                {total === 0 ? (
                    <Notification Notification message="There is no feedback" />
                ) : (
                    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
                )}
            </Section>
        </div>
    );
};

export default App;
