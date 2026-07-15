import React from "react";

const UserCard = ({ user, repos }) => {
  const userBio = user.bio ? <p>{user.bio}</p> : null;

  return (
    <div className="card">
      <div>
        <img src={user.avatar_url} alt={user.name} className="avatar" />
      </div>
      <div className="user-info">
        <h2>{user.name || user.login}</h2>
        {userBio}
        <ul>
          <li>
            {user.followers} <strong>Followers</strong>
          </li>
          <li>
            {user.following} <strong>Following</strong>
          </li>
          <li>
            {user.public_repos} <strong>Repos</strong>
          </li>
        </ul>

        <div id="repos">
          {repos.map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              className="repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
