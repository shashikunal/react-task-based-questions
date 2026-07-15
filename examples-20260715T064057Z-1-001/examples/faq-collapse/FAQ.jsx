import React, { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import "./FAQ.css";

const FAQs = [
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows.",
  },
  {
    question: "What's the object-oriented way to become wealthy?",
    answer: "Inheritance.",
  },
  {
    question: "How many tickles does it take to tickle an octopus?",
    answer: "Ten-tickles!",
  },
  { question: "What is: 1 + 1?", answer: "Depends on who are you asking." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className="title">Frequently Asked Questions</h1>
      <div className="faqContainer">
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className={`faq ${activeIndex === index ? "active" : ""}`}
          >
            <h3 className="faqTitle">{faq.question}</h3>
            {activeIndex === index && <p className="faqText">{faq.answer}</p>}
            <button className="faqToggle" onClick={() => toggleFAQ(index)}>
              {activeIndex === index ? (
                <FiX className="icon" />
              ) : (
                <FiChevronDown className="icon" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
