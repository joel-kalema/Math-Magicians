import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      keysnumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.keysnumber.map((num) => num)}
        </div>
      </div>
    );
  }
}

export default App;
