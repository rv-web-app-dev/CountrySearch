import React, { Component } from 'react'
import SearchBar from './SearchBar'
import fetchResourceFromURI from '../common/getDataFromAPI'
import CountryList from './CountryList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resources: [],
      term: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(event) {
    this.setState({ term: event.target.value })

  }

  async componentDidUpdate(prevProps,prevState){
    if(prevState.term !== this.state.term){
      let resources = await fetchResourceFromURI(this.state.term)
      this.setState({ resources })
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleSearch={() => this.handleSearch} value={this.state.term} />
        <CountryList countries={this.state.resources}/>
      </div>
    )
  }
}

export default App;
