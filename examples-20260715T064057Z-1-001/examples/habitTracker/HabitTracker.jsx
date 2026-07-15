// HabitTracker.jsx

import React, { useState, useEffect } from "react";
import "./HabitTracker.css";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);
  const [avatarStage, setAvatarStage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHabit, setNewHabit] = useState("");
  const [motivationalQuote, setMotivationalQuote] = useState("");

  // List of motivational quotes
  const quotes = [
    "Small steps lead to big changes.",
    "Believe in yourself and all that you are.",
    "Consistency is the key to success.",
    "Great things take time.",
    "Every day is a fresh start.",
    "Success is the sum of small efforts repeated daily.",
  ];

  // Add a new habit
  const addHabit = () => {
    setIsModalOpen(true);
  };

  const handleAddHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { name: newHabit, completed: false }]);
      setNewHabit("");
    }
    setIsModalOpen(false);
  };

  const toggleHabit = index => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = !updatedHabits[index].completed;
    setHabits(updatedHabits);

    // Update streak and progress
    const completedCount = updatedHabits.filter(
      habit => habit.completed
    ).length;
    setProgress((completedCount / habits.length) * 100);

    if (updatedHabits[index].completed) {
      setStreak(streak + 1);
      showRandomQuote();
    } else {
      setStreak(Math.max(0, streak - 1));
    }
  };

  // Show a random motivational quote
  const showRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setMotivationalQuote(quotes[randomIndex]);
  };

  // Level up avatar based on streak
  useEffect(() => {
    if (streak >= 10) {
      setAvatarStage(3);
    } else if (streak >= 5) {
      setAvatarStage(2);
    } else {
      setAvatarStage(1);
    }
  }, [streak]);

  useEffect(() => {
    // Show a random quote on component mount
    showRandomQuote();
  }, []);

  return (
    <div className="habit-tracker">
      <header className="header">
        <h1>HabitQuest</h1>
        <button onClick={addHabit}>Add Habit</button>
      </header>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="avatar-stage">
        <img
          src={`https://images.unsplash.com/photo-1715615685666-882710b534f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D`}
          alt="Avatar"
          className={`avatar avatar-stage-${avatarStage}`}
        />
        <p>Streak: {streak}</p>
      </div>
      <div className="motivational-quote">
        <p>{motivationalQuote}</p>
      </div>
      <div className="habits">
        {habits.map((habit, index) => (
          <div
            key={index}
            className={`habit ${habit.completed ? "completed" : ""}`}
            onClick={() => toggleHabit(index)}
          >
            {habit.name}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New Habit</h2>
            <input
              type="text"
              value={newHabit}
              onChange={e => setNewHabit(e.target.value)}
              placeholder="Enter habit name"
            />
            <button onClick={handleAddHabit}>Add</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitTracker;
