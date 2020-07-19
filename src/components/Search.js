import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function searchTerm() {
      const response = await axios.get("https://en.wikipedia.org/w/api.php?", {
        params: {
          actions: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
    }
    searchTerm();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Term</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
