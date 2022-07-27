import React from "react";
import { Component } from "react";

class FilterCountries extends Component{
    render(){
        return (
        <select type="text" onChange={(e) => this.props.regionChange(e.target.value)}>
            <option>Choose A Region</option>
            <option>Asia</option>
            <option>Americas</option>
            <option>Europe</option>
            <option>Africa</option>
            <option>Antarctic</option>
            <option>Oceania</option>
        </select>
        )
    }
}

export default FilterCountries;