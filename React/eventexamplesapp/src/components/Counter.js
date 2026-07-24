import React, { Component } from 'react';

// This class component demonstrates:
// 1. Event handling with onClick
// 2. Use of the "this" keyword to access component state and methods
// 3. A single handler (handleIncrement) invoking TWO methods:
//    a. incrementing the counter
//    b. showing a static "Hello" message
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    // Binding "this" so it refers to the component instance inside the handlers
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  // Method (a): increments the counter value
  incrementValue() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  // Method (b): displays a static "Hello" message
  sayHello() {
    alert('Hello! The counter was incremented.');
  }

  // The Increment button's onClick calls this single handler,
  // which in turn calls BOTH methods above using "this"
  handleIncrement() {
    this.incrementValue();
    this.sayHello();
  }

  handleDecrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div className="section">
        <h2>1. Counter (Increment / Decrement)</h2>
        <p className="counter-value">Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
