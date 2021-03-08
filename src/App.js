import React from 'react';
import './style.css';
import Pages from './components/Pages';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Pages/>
      </div>
    </Router>
  );
}

export default App;
