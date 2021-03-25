import React, { Component } from "react";
import './App.css';
import HomePage from '../HomePage/HomePage'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movieClicked: false,
    }
  }
  toggleMovieClicked = () => {
    this.setState({movieClicked: true})
  }
  render () {
    return (
      <>
      {!this.state.movieClicked ? <HomePage toggleMovieClicked= {this.toggleMovieClicked}/> : <h1>Hello World</h1>}
      </>
     );
  }
  
}

export default App;
