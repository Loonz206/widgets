import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  console.log("I run with every render");

  useEffect(() => {
    console.log("I only run once");
  }, []);

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
