import React, { useState, useEffect, useRef } from 'react';
import './randomChoicePicker.css';

const RandomChoicePicker = () => {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      setTimeout(() => setInputValue(''), 10);
      randomSelect();
    } else {
      createTags(e.target.value);
    }
  };

  const createTags = (input) => {
    const tagsArray = input
      .split(',')
      .filter((tag) => tag.trim() !== '')
      .map((tag) => tag.trim());
    setTags(tagsArray);
  };

  const randomSelect = () => {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();
      if (randomTag) {
        highlightTag(randomTag);
        setTimeout(() => unHighlightTag(randomTag), 100);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        const randomTag = pickRandomTag();
        if (randomTag) highlightTag(randomTag);
      }, 100);
    }, times * 100);
  };

  const pickRandomTag = () => {
    if (tags.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * tags.length);
    return document.getElementById(`tag-${randomIndex}`);
  };

  const highlightTag = (tag) => {
    tag.classList.add('highlight');
  };

  const unHighlightTag = (tag) => {
    tag.classList.remove('highlight');
  };

  return (
    <div className="container">
      <h3>
        Enter all of the choices divided by a comma (','). <br /> Press enter when
        you're done
      </h3>
      <textarea
        ref={textareaRef}
        placeholder="Enter choices here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyUp}
      ></textarea>
      <div id="tags">
        {tags.map((tag, index) => (
          <span key={index} id={`tag-${index}`} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RandomChoicePicker;
