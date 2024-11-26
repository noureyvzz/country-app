import React from "react";

const CountryList = ({ countries }) => {
  return (
    <ul>
      {countries.map((country, index) => (
        <li key={index}>
          {country.name} (Capital: {country.capital}) - Population: {country.population}, Area: {country.area} km², Density: {country.calculateDensity()} people/km²
        </li>
      ))}
    </ul>
  );
};

export default CountryList;


