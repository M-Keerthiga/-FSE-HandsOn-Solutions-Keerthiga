import React, { Component } from 'react';

// This component demonstrates:
// - Handling the onChange event of a text input
// - Handling the onSubmit / onClick event of a form/button
// - Using "this" to read state and update it via setState
// - A fixed conversion rate: 1 EUR = 90 INR (approx.) -- adjust as needed
const CONVERSION_RATE = 90; // 1 Euro = 90 Indian Rupees (sample rate)

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  // Handles the Click event of the "Convert" button.
  // Converts the entered Indian Rupees value into Euros.
  handleSubmit(event) {
    event.preventDefault();
    const rupeeValue = parseFloat(this.state.rupees);

    if (isNaN(rupeeValue)) {
      alert('Please enter a valid numeric value in Rupees.');
      return;
    }

    const euroValue = (rupeeValue / CONVERSION_RATE).toFixed(2);
    this.setState({ euro: euroValue });
  }

  render() {
    return (
      <div className="section">
        <h2>4. Currency Convertor (INR &rarr; EUR)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter amount in Rupees"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro !== null && (
          <p className="result">
            &#8377;{this.state.rupees} = &euro;{this.state.euro}
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
