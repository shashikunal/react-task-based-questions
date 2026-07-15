import React, { useState, useEffect } from "react";
import "./type.css";

const TypeAhead = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const endpoint =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setCities(data));
  }, []);

  const findMatches = (wordToMatch, cities) => {
    const regex = new RegExp(wordToMatch, "gi");
    return cities.filter(
      place => place.city.match(regex) || place.state.match(regex)
    );
  };

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = e => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const matches = findMatches(value, cities);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="container">
      <form className="search-form">
        <input
          type="text"
          className="search input"
          placeholder="City or State"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <ul className="suggestions">
          {suggestions.length > 0
            ? suggestions.map((place, index) => {
                const regex = new RegExp(searchTerm, "gi");
                const cityName = place.city.replace(
                  regex,
                  `<span class="hl">${searchTerm}</span>`
                );
                const stateName = place.state.replace(
                  regex,
                  `<span class="hl">${searchTerm}</span>`
                );

                return (
                  <li key={index} className="li">
                    <span
                      className="name"
                      dangerouslySetInnerHTML={{
                        __html: `${cityName}, ${stateName}`,
                      }}
                    />
                    <span className="population">
                      {numberWithCommas(place.population)}
                    </span>
                  </li>
                );
              })
            : cities?.map((ele, index) => {
                return (
                  <li key={index} className="li">
                    <span
                      className="name"
                      dangerouslySetInnerHTML={{
                        __html: `${ele.city}, ${ele.state}`,
                      }}
                    />
                    <span className="population">
                      {numberWithCommas(ele.population)}
                    </span>
                  </li>
                );
              })}
        </ul>
      </form>
    </div>
  );
};

export default TypeAhead;
