//! Create a react application having a navbar which will be displayed when we click on menu which a rotating animation and close the animation when click on close
import React, { Fragment, useState } from "react";
import "./style.css";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Rotating = () => {
  let [nav, setNav] = useState(false);
  return (
    <Fragment>
      <div className={`container ${nav ? "showNav" : ""}`}>
        <div className="circleContainer">
          <div className="circle">
            <button id="close" onClick={() => setNav(false)}>
              <FaXmark />
            </button>
            <button id="open" onClick={() => setNav(true)}>
              <FaBars />
            </button>
          </div>
        </div>
        <div className="content">
          <h1>Amazing Article</h1>
          <small>React v19</small>
          <p>
            React 19, released in 2024, introduces powerful features that
            enhance both developer experience and application performance. The
            addition of server components allows developers to offload rendering
            to the server, resulting in faster and more efficient client-side
            operations. The new use() hook streamlines asynchronous data
            fetching, working seamlessly with Suspense for managing loading and
            error states. Async transitions enable smooth, non-blocking UI
            updates, while the useOptimistic hook facilitates immediate feedback
            in user interfaces during asynchronous updates. Enhanced form
            handling with hooks like useActionState and improved resource
            preloading APIs further optimize development workflows. These
            advancements make React 19 a significant step forward in creating
            responsive, scalable, and efficient applications
          </p>
          <h3>React</h3>
          <img
            src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*85xMRqJb8m0-y2vG"
            alt=""
          />
          <p>
            The star of React 19 is its new compiler. 🎉 This compiler
            transforms your React code into plain JavaScript, which boosts
            performance and, even better, frees you from constantly tweaking
            performance manually. To optimize our React applications, we use
            some inbuilt methods like useMemo or useCallback. This tells React
            not to compile the code again if the inputs don’t change. But if you
            forget to apply memoization, it results in wasting React resources
            and computational power. To deal with this, React 19 introduced
            React Compiler. Say goodbye to manual optimizations and hello to
            cleaner code:
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <span>
              <FaHome />
            </span>
            <a href="">Home</a>
          </li>
          <li>
            <span>
              <FaUser />
            </span>
            <a href="">About</a>
          </li>
          <li>
            <span>
              <FaEnvelope />
            </span>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Rotating;
