import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL : `https://localhost:44303/api/User`
})

class App extends Component {
  state = 
  {
    users : []
  }
  constructor()
  {
    super();
    api.get('/').then(res => {
      console.log(res.data)
      this.setState({users : res.data})
    })
  }

  createUser = async () => {
    let res = await api.post('/',{Id :0, FirstName: "Nicoleta", LastName: "Guriev",EmailAddress: "NicoletaEmail",Password: "nicoletaPass"})
    console.log(res);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick = {this.createUser}>createUser</button>
          {this.state.users.map(user => <h2 key = {user.id}>{user.FirstName}</h2>)}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
