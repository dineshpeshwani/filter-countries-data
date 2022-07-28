import React from "react";

const CountriesCard = (props) => {
  return (
    <div
      style={{
        width: "20%",
        margin: "1rem",
        backgroundColor: "white",
        color: "black",
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <img
        style={{ width: "100%", height: "50%" }}
        src={props["flags"]["svg"]}
        alt="flag-img"
      ></img>
      <div style={{ padding: "0 2rem" }}>
        <h2>{props["name"]["official"]}</h2>
        <p>Capital: {props["capital"]}</p>
        <p>Region: {props["region"]}</p>
        <p>Population: {props["population"]}</p>
      </div>
    </div>
  );
};
export default CountriesCard;
