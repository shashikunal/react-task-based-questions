import { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import "./incounter.css";

const InCounter = () => {
  const [countC, setCountC] = useState(0);
  const [countD, setCountD] = useState(500);
  const [countE, setCountE] = useState(1500);

  const targetC = 6000;
  const targetD = 7500;
  const targetE = 10000;

  useEffect(() => {
    const intervalC = setInterval(() => {
      setCountC(prev => {
        if (prev < targetC) {
          return prev + 1;
        } else {
          clearInterval(intervalC);
          return prev;
        }
      });
    }, 200);

    const intervalD = setInterval(() => {
      setCountD(prev => {
        if (prev < targetD) {
          return prev + 1;
        } else {
          clearInterval(intervalD);
          return prev;
        }
      });
    }, 200);

    const intervalE = setInterval(() => {
      setCountE(prev => {
        if (prev < targetE) {
          return prev + 1;
        } else {
          clearInterval(intervalE);
          return prev;
        }
      });
    }, 200);

    return () => {
      clearInterval(intervalC);
      clearInterval(intervalD);
      clearInterval(intervalE);
    };
  }, []);

  return (
    <section id="mainContainer">
      <div>
        <p>
          <FaYoutube />
        </p>
        <p>{countC}</p>
      </div>
      <div>
        <p>
          <CiTwitter />
        </p>
        <p>{countD}</p>
      </div>
      <div>
        <p>
          <FaFacebook />
        </p>
        <p>{countE}</p>
      </div>
    </section>
  );
};

export default InCounter;
