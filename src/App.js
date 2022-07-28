import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import CountriesCard from "./components/countries";
import FilterCountries from "./components/filterCountries";
import SearchCountries from "./components/searchbar";

class App extends Component {
  state = {
    countriesList: countries,
    updatedCountries: "",
    filterRegion: ""
  };

  handleSearch = (val) => {
    this.setState({updatedCountries: val});
    }

  handleFilter = (val) => {
   this.setState({ filterRegion: val});
    }

  render() {
    let finalElement;
    let finalFilter = this.state.countriesList
    .filter((country) => {
      if (country["name"]["official"].toLowerCase().includes(this.state.updatedCountries.toLowerCase())) {
        return (country);
      }
      else
      {
        if(this.state.updatedCountries === ""){
          return (country);
        }
      }
    })
    .filter((country) => {
      if (country["region"].toLowerCase().includes(this.state.filterRegion.toLowerCase())) {
        return (country);
      }
      else
      {
        if(this.state.filterRegion === "Choose A Region"){
          return (country);
        }
      }
    })
    if(finalFilter.length===0){
        finalElement = <h1>No Such Country Found</h1>
    }else{
      finalElement = finalFilter.map( (country) => {
        return (
          <CountriesCard key={country["name"]["official"]} {...country}/>
        );
        })}

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#f2f2f2",
        }}
      >
        <h1>COUNTRIES</h1>
        <div style={{ display: "flex" }}>
          <SearchCountries handleChange={(e) => {this.handleSearch(e.target.value)}}/>
          <FilterCountries regionChange={this.handleFilter}/>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            {finalElement}
        </div>
      </div>
    );
  }
}

export default App;
