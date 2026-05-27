import '../App.css'
import React, { Component } from 'react'
import calendar from '../reducers'

class App extends Component {
  state = {
    calendar: null
  }
  componentDidMount () {
    
  }
  render() {
    return (
      <div>
        <input type='text' ref={(input) => this.input = input} placeholder="Monday's Breakfast" />
        <button onClick={this.submitFood}>Submit</button>
        <pre>
        Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast};
      </pre>
      </div>
    )
  }
}

export default App;