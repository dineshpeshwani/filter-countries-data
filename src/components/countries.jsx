import React from "react";

const CountriesCard = (props) => {
    return (
        <div style={{width: "25%", padding: '2rem', margin: '1rem', backgroundColor: '#454545', color:"white"}}>
            <img style={{width: "100%", height: "50%"}} src={(props['flags']['svg'])}></img>
            <p>Country: {(props['name']['official'])}</p>
            <p>Capital: {(props['capital'])}</p>
            <p>Region: {(props['region'])}
              <span> Subregion: {(props['subregion'])}</span>
            </p>
            <p>Area: {(props['area'])}</p>
            <p>Population: {(props['population'])}</p>
        </div>
    )
};
export default CountriesCard;