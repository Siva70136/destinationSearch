// Write your code here

import {Component} from 'react'

import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const result = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main">
        <h1 className="">Destination Search</h1>
        <div className="searchBox">
          {' '}
          <input
            type="search"
            placeholder="Search"
            className="search"
            value={searchInput}
            onChange={this.onSearch}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
            alt="search icon"
          />
        </div>

        <ul className="box1">
          {result.map(each => (
            <DestinationItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
