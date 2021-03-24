import React, { Component }from "react";
import Header from "../Header/Header";
import movieData from "../data/movies.js";


class HomePage extends Component {
  constructor() {
    super()
    this.state= {
      movies: [],
    }
  }
  render() {
    return (
       <>
        <Header/>
        <main>Movies Go Here</main>
        <footer>Our contact info here</footer>
       </>  
    )
  }
}

export default HomePage;
