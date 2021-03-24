import React, { Component }from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
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
        <Footer/>
       </>  
    )
  }
}

export default HomePage;
