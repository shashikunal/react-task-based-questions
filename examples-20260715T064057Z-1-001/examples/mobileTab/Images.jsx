import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import "./mobileTab.css";

const Images = () => {
  let [indexValue, setIndexValue] = useState(0);
  let clicks = [
    { name: "Home", icon: <FaHome /> },
    { name: "Work", icon: <FaBox /> },
    { name: "Blog", icon: <FaBookOpen /> },
    { name: "About us", icon: <FaUsers /> },
  ];
  let images = [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmt8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVhbXxlbnwwfHwwfHx8MA%3D%3D",
  ];
  const handleClick = e => {
    setIndexValue(e.currentTarget.dataset.index);
  };

  return (
    <section>
      <aside>
        <img src={images[indexValue]} alt="" />
      </aside>
      <article>
        {clicks.map((value, index) => {
          return (
            <div
              key={index}
              data-index={index}
              onClick={handleClick}
              className={index == indexValue ? "active" : ""}
            >
              <p>{value.icon}</p>
              <p>{value.name}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Images;
