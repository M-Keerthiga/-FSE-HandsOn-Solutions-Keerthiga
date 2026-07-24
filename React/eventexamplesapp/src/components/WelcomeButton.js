import React, { Component } from 'react';

// This component demonstrates passing an ARGUMENT to an event handler function.
// The onClick uses an arrow function so we can pass "welcome" as a parameter
// to sayWelcome(message) at the moment the button is clicked.
class WelcomeButton extends Component {
  sayWelcome(message) {
    alert(`Message: ${message}`);
  }

  render() {
    return (
      <div className="section">
        <h2>2. Say Welcome (Passing Arguments to Handlers)</h2>
        <button onClick={() => this.sayWelcome('welcome')}>
          Say Welcome
        </button>
      </div>
    );
  }
}

export default WelcomeButton;
