import React from 'react';
import './App.css';
import BusinessList from '../components/BusinessList';
import SearchBar from '../components/SearchBar';
import logo from './logo.svg';


class App extends React.Component {
  render() {
    return (
     <div className="App">
      <h1>ravenous</h1>
      <div className="SearchBar">
              <div className="SearchBar-sort-options">
                <ul>
                  .renderSortByOptions()
                </ul>
              </div>
              <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
              </div>
              <div className="SearchBar-submit">
                <a>Let's Go</a>
              </div>
            </div>
      <div className="BusinessList">
              <h2> {this.props.business.name} </h2> 
              <h3> {this.props.business.address} </h3>
              <h3> {this.props.business.city} </h3>
              <h3> {this.props.business.state} </h3>
              <h3> {this.props.business.zipCode} </h3>
              <h3> {this.props.business.category} </h3>
            </div> 
     </div>
     
    );
  }
}

export default App;
