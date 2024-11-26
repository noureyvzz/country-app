import React, { useState } from "react";

const CountryForm = ({ addCountry }) => {
  const [form, setForm] = useState({ name: "", capital: "", population: "", area: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCountry(form);
    setForm({ name: "", capital: "", population: "", area: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Country Name"
        value={form.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="capital"
        placeholder="Capital"
        value={form.capital}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="population"
        placeholder="Population"
        value={form.population}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="area"
        placeholder="Area (km²)"
        value={form.area}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Add Country</button>
    </form>
  );
};

export default CountryForm;

