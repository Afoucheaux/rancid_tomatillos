import React, { Component } from "react";
import './App.css';
import HomePage from '../HomePage/HomePage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      clickedMovieId: ''
    }
  }

  onMovieClick = (id) => {
    this.setState({ clickedMovieId: id })
  }

  render() {
    return (
      <>
        {!this.state.clickedMovieId ?
        <HomePage onMovieClick={this.onMovieClick}/> : <h1>Test</h1>}
      </>
    )
  }
}

export default App;
