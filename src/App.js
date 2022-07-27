import React, { Component } from 'react';
import './App.css';
// import Navbar from './components/navbar';
import countries from './countries.json';
import CountriesCard from './components/countries';
import FilterCountries from './components/filterCountries';

class App extends Component{

  state = {
    countriesList : countries
  }

  handleFilter = (val) => {
    const searchValue = val.toLowerCase();
    if(searchValue !== 'choose a region'){
      const searchedCountries = countries.filter((country) => {
        return (country['region'].toLowerCase().includes(searchValue))
      })   
      this.setState({countriesList : searchedCountries})
    }
    else{
      this.setState({countriesList : countries})
    }
  }

  render(){
    return(
        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
         <FilterCountries regionChange={this.handleFilter} />
         <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
             {this.state.countriesList.map((country) => {
             return <CountriesCard key = {country['name']['official']} {...country}/>
          })}
          </div>
        </div>
    )
  }
}

export default App;