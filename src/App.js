// import { useState } from 'react';
import './App.css';

import { Component } from 'react';
import CardList from './components/card-list/CardComponent';
import SearchList from './components/search-box/SearchComp';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searching: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => this.setState(() => {
        return {
          cats: users,
        }
      }))
  }

  onSearch = (event) => {
    const searching = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searching }
    })
  }

  render() {

    const { cats, searching } = this.state;
    const { onSearch } = this;

    const filterM = cats.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searching)
    })

    return (
      <div className="App">
        <h1 className="title">List Of Cats</h1>
        <SearchList searchHandler={onSearch} />
        <CardList cats={filterM} />
      </div >

    );
  }
}



export default App;
