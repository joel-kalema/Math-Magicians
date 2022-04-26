import React from 'react';
import './App.css';
import Calculator from './component/calculator';
import Nav from './component/navBar';
import Quote from './component/Quote';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <Quote />
        <Calculator />
      </div>
    );
  }
}

export default App;
