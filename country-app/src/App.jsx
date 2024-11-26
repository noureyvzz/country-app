import React, { useState } from "react";
import CountryForm from "./components/CountryForm";
import CountryList from "./components/CountryList";
import Calculator from "./components/Calculator";
import Accordion from "./components/Accordion";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Country from "./classes/Country";

const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = (form) => {
    const newCountry = new Country(form.name, form.capital, form.population, form.area);
    setCountries([...countries, newCountry]);
  };

  return (
    <div>
      <ThemeSwitcher />
      <Accordion title="Add Country">
        <CountryForm addCountry={addCountry} />
      </Accordion>
      <Accordion title="Country List">
        <CountryList countries={countries} />
      </Accordion>
      <Accordion title="Calculator">
        <Calculator />
      </Accordion>
    </div>
  );
};

export default App;



