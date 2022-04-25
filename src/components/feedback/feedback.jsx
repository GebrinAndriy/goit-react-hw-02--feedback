import { Component } from "react";
import {Statistic} from "./statistic.jsx"
import {FeedbackOptions} from "./options.jsx"
import {Section} from "./section.jsx"
import { Notification } from "./notification.jsx";
export default class Feedback extends Component{
      state = {
            good: 0,
            neutral: 0,
            bad: 0,
      }
      onLeaveFeedback = element => {
        this.setState(prevState => ({
          [element]:prevState[element] + 1
        }));
      }
    countTotalFeedback = () =>{
        const total = this.state.good + this.state.bad + this.state.neutral;
        return total
    }
    countPositiveFeedbackPercentage = () =>{
        const percent = this.state.good / this.countTotalFeedback() * 100;
        return percent
    }

    render(){
        return(
            <div className="feedback">
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
                </Section>
                <Section title={"Statistic"}>
                {this.countTotalFeedback() > 0 ? (<Statistic
                    bad = {this.state.bad}
                    good = {this.state.good}
                    neutral = {this.state.neutral}
                    total = {this.countTotalFeedback()}
                    percent = {this.countPositiveFeedbackPercentage()}
                />) : (
                    <Notification message="There is no feedback"/>
                )
                }
                </Section>
            </div>        )
    }
}