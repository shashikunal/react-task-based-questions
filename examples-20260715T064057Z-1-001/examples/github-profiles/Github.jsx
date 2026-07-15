// App.js
import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import UserCard from "./UserCard";
import ErrorCard from "./ErrorCard";
import "./github.css";

const APIURL = "https://api.github.com/users/";

const Github = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const getUser = async username => {
    try {
      const { data } = await axios.get(APIURL + username);
      setUserData(data);
      setError("");
      getRepos(username);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("No profile with this username");
        setUserData(null);
        setRepos([]);
      }
    }
  };

  const getRepos = async username => {
    try {
      const { data } = await axios.get(
        `${APIURL}${username}/repos?sort=created`
      );
      setRepos(data.slice(0, 5));
    } catch (err) {
      setError("Problem fetching repos");
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    const username = e.target.elements.search.value.trim();

    if (username) {
      getUser(username);
      e.target.reset();
    }
  };
  return (
    <div className="app">
      <SearchForm onSearch={handleSearch} />
      {error && <ErrorCard message={error} />}
      {userData && <UserCard user={userData} repos={repos} />}
    </div>
  );
};

export default Github;


//! 7. Github: GitHub Profile Fetcher
// Create a component to fetch and display data from GitHub (like user profiles or repositories).

// What to create:

// A component that fetches user profile data from the GitHub API and displays it.