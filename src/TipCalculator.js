import React, { Component } from 'react';

class TipCalculator extends Component {
    constructor(props) {
      super(props)
      
      this.state = { 
        bill: 10.00,
        tip: 15,
        split: 2 
      }
    }
  
    render() {

      // First convert the tip percentage to a decimal and then multiply that by the bill to find the tip amount
      const tipAmount = this.state.bill * this.state.tip / 100;
      // The new total is the sum of the bill and the tip
      // Use parseFloat() to prevent string concatenation
      const totalBill = parseFloat(this.state.bill) + parseFloat(tipAmount);
      // The amount each person must pay is the total amount divided by the number of people splitting the bill
      const amountPerPerson = totalBill / this.state.split;

      return (
        <div className="row">
      
          <div className="column">
            <label>
              Bill ($)
              <input 
                type="number"
                value={this.state.bill}
                onChange={(e) => this.setState({ bill: e.target.value })}
              />
            </label>
          
            <label>
              Tip (%)
              <input 
                type="number"
                value={this.state.tip}
                onChange={(e) => this.setState({ tip: e.target.value })}
              />
            </label>
          
            <label>
              Split (Number of People)
              <input 
                type="number"
                value={this.state.split}
                onChange={(e) => this.setState({ split: e.target.value })}
              />
            </label>
          </div>

          <div className="column">
            <p>Tip Amount</p>
            <h2>${tipAmount.toFixed(2)}</h2>

            <p>Total Bill (including tip)</p>
            <h2>${totalBill.toFixed(2)}</h2> 

            <p>Amount Per Person</p>
            <h2>${amountPerPerson.toFixed(2)}</h2> 
          </div>
          
        </div>
      )
    }
}

export default TipCalculator