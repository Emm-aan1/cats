import { Component } from "react";
import './searchBox.css';

class SearchList extends Component {
  render() {
    const { searchHandler } = this.props;

    return (
      <input type="search" className="search-box" placeholder='search cat' onChange={searchHandler} />
    )
  }
}

export default SearchList;