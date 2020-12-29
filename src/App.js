import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainContainer from './container/main-container';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MainContainer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
