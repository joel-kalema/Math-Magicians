import React from 'react';
import './App.css';
import Calculator from './component/calculator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
