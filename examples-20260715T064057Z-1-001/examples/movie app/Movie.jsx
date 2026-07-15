//! Create a react application where you will display the top rated movies to user and provide a search functionality also to user, where user can search movies based on name and those particular movies will be visible only. 
import React, { Fragment, useEffect,  useState } from "react";
import "./style.css";

const Movie = () => {
  let [search, setSearch] = useState("");
  let [movies, setMovies] = useState();
  let [api, setAPI] = useState(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
  );

  let handleChange = e => {
    setSearch(e.target.value);
  };
  let handleSubmit = e => {
    e.preventDefault();
    console.log(search);
    setAPI(
      "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=" +
        search
    );
  };

  let fetchMovie = async url => {
    let result = await fetch(url);
    let data = await result.json();
    setMovies(data.results);
  };
  let classByRate = vote => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  useEffect(() => {
    fetchMovie(api);
  }, [api]);
  return (
    <Fragment>
      <header>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
        </form>
      </header>
      <main>
        {movies &&
          movies.map(({ title, poster_path, vote_average, overview, id }) => {
            return (
              <div className="movie" key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
                  alt=""
                />
                <div className="movieInfo">
                  <h3>{title}</h3>
                  <span className={classByRate(vote_average)}>
                    {vote_average}
                  </span>
                </div>
                <div className="overview">
                  <h3>Overview</h3>
                  {overview}
                </div>
              </div>
            );
          })}
      </main>
    </Fragment>
  );
};

export default Movie;
