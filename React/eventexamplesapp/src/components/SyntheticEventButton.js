import React, { Component } from 'react';

// This component demonstrates React's SYNTHETIC EVENT.
// React wraps the browser's native event in a cross-browser wrapper
// object called SyntheticEvent, which is passed automatically to every
// event handler (here, onClick -> handlePress(event)).
//
// SyntheticEvent has the same interface as the native event
// (stopPropagation(), preventDefault(), target, type, etc.) so your
// code behaves consistently across all browsers.
class SyntheticEventButton extends Component {
  handlePress = (event) => {
    // "event" here is the SyntheticEvent, not the raw browser event
    console.log('SyntheticEvent type:', event.type);
    console.log('SyntheticEvent target:', event.target);
    alert('I was clicked');
  };

  render() {
    return (
      <div className="section">
        <h2>3. Synthetic Event (onPress-style Click)</h2>
        <button onClick={this.handlePress}>Click Me (onPress)</button>
      </div>
    );
  }
}

export default SyntheticEventButton;
