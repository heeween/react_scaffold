import React from 'react';
import './App.css';
import axios from 'axios';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.handleUserData}>Get User</button>
        <button onClick={this.handleCarData}>Get Car</button>
      </div>
    );
  }
  handleUserData = (params) => {
    axios.get('http://localhost:3000/api1/students').then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  handleCarData = (params) => {
    axios.get('http://localhost:3000/api2/cars').then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}

export default App;
