import { useState } from "react";
import Users from "./Users";
import "./live.css";

const Search = () => {
  let [search, setSearch] = useState("");
  let handleChange = e => {
    let { value } = e.target;
    setSearch(value);
  };
  return (
    <section id="searchContainer">
      <article>
        <div>
          <h1>live user filter</h1>
          <p>Search by name / location</p>
        </div>
        <div className="form">
          <form action="">
            <input
              type="search"
              name="search"
              id="search"
              value={search}
              placeholder="Search User"
              onChange={handleChange}
            />
          </form>
        </div>
      </article>
      <div className="user">
        <Users search={search} />
      </div>
    </section>
  );
};

export default Search;
