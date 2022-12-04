import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="searchbar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className="input-search"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
        onClick={e => (e.target.value="")}
      />
      <input className="submit" type="submit" value="Agregar" />
    </form>
  );
}
