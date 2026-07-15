import React, { useState, useEffect } from "react";
import "./place.css";

const ContentPlaceholder = () => {
  const [content, setContent] = useState({
    header: null,
    title: null,
    excerpt: null,
    profileImg: null,
    name: null,
    date: null,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContent({
        header: (
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt="Header"
          />
        ),
        title: "Lorem ipsum dolor sit amet",
        excerpt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
        profileImg: (
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Profile"
          />
        ),
        name: "John Doe",
        date: "Oct 08, 2020",
      });
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="card">
      <div
        className={`card-header ${loading ? "animated-bg" : ""}`}
        id="header"
      >
        {content.header}
      </div>
      <div className="card-content">
        <h3
          className={`card-title ${
            loading ? "animated-bg animated-bg-text" : ""
          }`}
          id="title"
        >
          {loading ? " " : content.title}
        </h3>
        <p className="card-excerpt" id="excerpt">
          {loading ? (
            <>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
            </>
          ) : (
            content.excerpt
          )}
        </p>
        <div className="author">
          <div
            className={`profile-img ${loading ? "animated-bg" : ""}`}
            id="profile_img"
          >
            {content.profileImg}
          </div>
          <div className="author-info">
            <strong
              className={`${loading ? "animated-bg animated-bg-text" : ""}`}
              id="name"
            >
              {loading ? " " : content.name}
            </strong>
            <small
              className={`${loading ? "animated-bg animated-bg-text" : ""}`}
              id="date"
            >
              {loading ? " " : content.date}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPlaceholder;
