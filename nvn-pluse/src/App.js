import React, { Component } from 'react';
import './App.css';
import './Body.css'
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <SearchBar />
      </div>

    );
  }
}

export default App;
