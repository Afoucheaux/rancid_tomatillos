import React, { Component } from "react";
import "./SearchFilter.css";


class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.state= {
      keywords: "", 
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
    this.props.displaySearch(value)
  }


  render() {
    return (
      <form className={`search-container ${this.props.hideSearch}`} >
        <input className="search-movies" value={this.state.keywords} name="keywords" onChange={this.handleChange} placeholder="search movies here"/>
      </form>
    )
  }
}


export default SearchFilter