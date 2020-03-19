import React from 'react';
import QuizApp from './components/QuizApp';
import './css/main.min.css';

function App() {
  return (
    <div className="app">
      <h1 className="app_header">How well do you know Throne of glass series?</h1>
      <QuizApp/>
    </div>
  );
}

export default App;
