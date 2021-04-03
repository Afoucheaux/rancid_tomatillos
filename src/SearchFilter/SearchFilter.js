import React, { Component } from "react";


class SearchFilter extends Component {
  constructor() {
    super()
    this.state= {
      keywords: "", 
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <form>
        <input className="search-movies" value={this.state.keywords} name="keywords" onChange={this.handleChange} placeholder="search movies here"/>
        <button>SEARCH MOVIES</button>
      </form>
    )
  }
}


export default SearchFilter