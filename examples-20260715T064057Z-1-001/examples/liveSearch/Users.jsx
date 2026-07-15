/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import "./live.css";

const Users = ({ search }) => {
  let [data, setData] = useState([]);
  let fetchUser = async () => {
    let { data } = await axios.get("https://randomuser.me/api?results=50");
    setData(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  let filteredUsers = data.results?.filter(value => {
    if (search == "") {
      return value;
    } else {
      return (
        value.name.first.toLowerCase().includes(search.toLowerCase()) ||
        value.location.country.toLowerCase().includes(search.toLowerCase())
      );
    }
  });
  return (
    <div className="userContainer">
      {filteredUsers?.map(user => {
        return (
          <section key={user.id} className="mainContainer">
            <div>
              <img src={user.picture.large} alt="" className="image" />
            </div>
            <div>
              <p className="username">
                <span>{user.name.first}</span> <span>{user.name.last}</span>
              </p>
              <p>{user.location.country}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Users;
