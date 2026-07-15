import React, { useState } from "react";
import "./recipeFinder.css";

const recipeData = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    ingredients: [
      "Spaghetti",
      "Ground meat",
      "Tomato Sauce",
      "Onions",
      "Garlic",
    ],
    steps: [
      "Boil the spaghetti.",
      "Cook the ground meat.",
      "Add tomato sauce, onions, and garlic.",
      "Mix the spaghetti with the sauce.",
      "Serve hot.",
    ],
    animation: "./spaghetti.gif", // Specific animation for this recipe
  },
  {
    id: 2,
    name: "Pancakes",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
    steps: [
      "Mix the flour, milk, eggs, and sugar.",
      "Heat butter in a pan.",
      "Pour the batter into the pan.",
      "Flip the pancake when bubbles appear.",
      "Serve with syrup.",
    ],
    animation: "./pancake.gif",
  },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: [
      "Lettuce",
      "Croutons",
      "Parmesan",
      "Caesar Dressing",
      "Chicken",
    ],
    steps: [
      "Chop the lettuce.",
      "Cook and slice the chicken.",
      "Toss lettuce, croutons, and chicken together.",
      "Add Caesar dressing and Parmesan.",
      "Serve chilled.",
    ],
    animation: "./vegetable.gif",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    ingredients: ["Flour", "Cocoa Powder", "Eggs", "Sugar", "Butter"],
    steps: [
      "Mix the dry ingredients.",
      "Whisk eggs and butter together.",
      "Combine dry and wet ingredients.",
      "Bake in the oven at 180°C.",
      "Cool and serve.",
    ],
    animation: "./cake.gif",
  },
];

const RecipeFinder = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCooking, setIsCooking] = useState(false);

  const startCooking = () => {
    setIsCooking(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < selectedRecipe.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCooking(false);
    }
  };

  return (
    <div className="recipe-finder">
      <h1 className="title">Recipe Finder</h1>
      <div className="recipe-list">
        {recipeData.map(recipe => (
          <div
            key={recipe.id}
            className={`recipe-card ${
              selectedRecipe?.id === recipe.id ? "selected" : ""
            }`}
            onClick={() => setSelectedRecipe(recipe)}
          >
            <h3>{recipe.name}</h3>
          </div>
        ))}
      </div>

      {selectedRecipe && !isCooking && (
        <div className="recipe-details">
          <h2>{selectedRecipe.name}</h2>
          <h4>Ingredients:</h4>
          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <button className="start-cooking-btn" onClick={startCooking}>
            Start Cooking
          </button>
        </div>
      )}

      {isCooking && (
        <div className="cooking-area">
          <h2>Cooking: {selectedRecipe.name}</h2>
          <div className="step-display">
            <p className="step-text">{selectedRecipe.steps[currentStep]}</p>

            <img src={selectedRecipe.animation} alt="" />
          </div>
          <button className="next-step-btn" onClick={nextStep}>
            {currentStep < selectedRecipe.steps.length - 1
              ? "Next Step"
              : "Finish"}
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeFinder;
