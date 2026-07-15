import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

import "./index.css";
import UserDetails from "./UsersDetails";
import Testimonial from "./Testimonial";

const TestimonialContainer = () => {
  const testimonials = [
    {
      name: "Miyah Myles",
      position: "Marketing",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
      text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details.",
    },
    {
      name: "June Cha",
      position: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "This guy is an amazing frontend developer that delivered the task exactly how we need it. Do yourself a favor and hire him. You will not be disappointed.",
    },
    {
      name: "Iida Niskanen",
      position: "Data Entry",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "This guy is a hard worker. Communication was very good, and he was very responsive. We'll definitely repeat with him.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const { name, position, photo, text } = testimonials[currentIndex];

  return (
    <div className="testimonial-container">
      <ProgressBar />
      <Testimonial text={text} />
      <UserDetails name={name} position={position} photo={photo} />
    </div>
  );
};

export default TestimonialContainer;
