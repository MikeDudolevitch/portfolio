import './App.css';
import React from 'react'
import Navigation from './components/Navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"
import Intro from './components/Intro';

class App extends React.Component {
  render() {
  return (
    <Router>
      <Navigation />
      <Intro/>
    <div className="App">
      <header className="App-header">
        <h1 style={{color: 'cornsilk'}}>Oh um........ Hi dere</h1>
      </header>
    </div>
    </Router>
  );
  }
}

export default App;
