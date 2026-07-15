import React from "react";
import "./CardFlip.css";

const CardsFlip = () => {
  const cards = [
    {
      title: "Premium Plan",
      description: "Unlimited access to all features.",
      details: [
        "✅ Unlimited storage",
        "✅ 24/7 Support",
        "✅ Advanced Analytics",
      ],
    },
    {
      title: "Pro Plan",
      description: "Perfect for small teams.",
      details: [
        "✅ 100GB storage",
        "✅ Priority support",
        "✅ Custom branding",
      ],
    },
    {
      title: "Basic Plan",
      description: "For individuals and starters.",
      details: ["✅ 10GB storage", "✅ Email support", "✅ Basic analytics"],
    },
  ];

  // Background styles for each card
  const cardBackgrounds = [
    "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink gradient
    "linear-gradient(135deg, #ffdde1, #ee9ca7)", // Light red gradient
    "linear-gradient(135deg, #84fab0, #8fd3f4)", // Light green/blue gradient
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-inner">
            {/* Card Front */}
            <div
              className="card-front"
              style={{ background: cardBackgrounds[index] }}
            >
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>

            {/* Card Back */}
            <div className="card-back">
              <h3>Features:</h3>
              <ul>
                {card.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsFlip;
