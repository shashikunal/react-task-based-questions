import React from "react";

const UserDetails = ({ name, position, photo }) => {
  return (
    <div className="user">
      <img className="user-image" src={photo} alt={name} />
      <div className="user-details">
        <h4 className="username">{name}</h4>
        <p className="role">{position}</p>
      </div>
    </div>
  );
};

export default UserDetails;
