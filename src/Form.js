import React from 'react';

class Form {
    constructor(props) {
      super(props)
      this.state = { name: '' }
    }
  
    render() {
      <form>
        <input 
          type="number"
          value={this.state.bill}
          onChange={(e) => this.setState({ bill: e.target.value })}
        />
        <input 
          type="number"
          value={this.state.tip}
          onChange={(e) => this.setState({ tip: e.target.value })}
        />
        <input 
          type="number"
          value={this.state.split}
          onChange={(e) => this.setState({ split: e.target.value })}
        />
      </form>
    }
}

export default Form