import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    let email = this.state.email;
    let password = this.state.password;
    event.preventDefault();
    fetch('127.0.0.1:8000/',
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    });
    console.log(event.target.value);
  }

  render() {
      return (
      <div className="App">
        <h1>Hello world</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="email">Email </label>
          <input type="text" name="email" onChange={this.handleChange} /> <br/>
          <label for="password">Password </label>
          <input type="password" name="password" onChange={this.handleChange} /> <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }  
}

export default App;
