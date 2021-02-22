import React, { Component } from 'react';
import {quizData} from '../questionsData';
import Questions from './Questions';

class QuizApp extends Component {
  state = {
    currentQuestion: 0,
    options: [],
    questions: '',
    answer: '',
    myAnswer:'',
    counter: 0,
    isFinished: false
  }
 loadQuizData = () => {
        this.setState({
            questions: quizData[this.state.currentQuestion].question,
            answer: quizData[this.state.currentQuestion].answer,
            options: quizData[this.state.currentQuestion].options,
          });
      };

  handleChangeQuestion = () => {
    if(this.state.myAnswer===this.state.answer){
      this.setState({
        counter: this.state.counter+1
      })
    }
    this.setState({
      currentQuestion: this.state.currentQuestion+1
    })
  }
  componentDidMount(){
        this.loadQuizData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }

  handleCheckAnswer=(myAnswer)=>{
    this.setState({
      myAnswer: myAnswer
    })
  }

  handleFinish = ()=>{
    this.setState({
      isFinished: true
    })
  }
    
  render() {
    return (
      <div className="quiz-content">
        <Questions 
          questions={this.state.questions} 
          options={this.state.options}
          handleCheckAnswer={this.handleCheckAnswer}
          myAnswer={this.state.myAnswer}
          currentQuestion={this.state.currentQuestion}
          handleChangeQuestion={this.handleChangeQuestion}
          handleFinish={this.handleFinish}
          isFinished={this.state.isFinished}
          counter={this.state.counter}/>
      </div>
    );
  }
    
}        


export default QuizApp;