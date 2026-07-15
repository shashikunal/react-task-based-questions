import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

const MemoryGame = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2014/07/21/11/51/rose-398576_1280.png",
    "https://cdn.pixabay.com/photo/2013/07/12/15/59/lotus-150693_1280.png",
    "https://cdn.pixabay.com/photo/2016/01/20/17/19/flower-1151970_1280.png",
    "https://cdn.pixabay.com/photo/2017/01/31/08/18/floral-2023179_1280.png",
    "https://cdn.pixabay.com/photo/2016/01/20/17/16/flower-1151963_1280.png",
    "https://cdn.pixabay.com/photo/2017/02/01/10/26/floral-2029472_1280.png",
  ];

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    const shuffledImages = [...images, ...images].sort(
      () => Math.random() - 0.5
    );
    const initialCards = shuffledImages.map((src, index) => ({
      id: index,
      src,
      flipped: false,
      matched: false,
    }));
    setCards(initialCards);
  }, []);

  const handleCardClick = card => {
    if (flippedCards.length === 2 || card.flipped || card.matched) return;

    const newCards = cards.map(c =>
      c.id === card.id ? { ...c, flipped: true } : c
    );
    setCards(newCards);
    setFlippedCards([...flippedCards, card]);

    if (flippedCards.length === 1) {
      const [firstCard] = flippedCards;
      if (firstCard.src === card.src) {
        setMatchedPairs(matchedPairs + 1);
        setCards(
          newCards.map(c => (c.src === card.src ? { ...c, matched: true } : c))
        );
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(
            newCards.map(c =>
              c.id === card.id || c.id === firstCard.id
                ? { ...c, flipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="memory-game">
      <h1 className="title">Memory Game</h1>
      <div className="game-container">
        {cards.map(card => (
          <div
            key={card.id}
            className={`card ${card.flipped ? "flipped" : ""} ${
              card.matched ? "matched" : ""
            }`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-front"></div>
            <div className="card-back">
              <img src={card.src} alt="Card" />
            </div>
          </div>
        ))}
      </div>
      {matchedPairs === images.length && (
        <p className="win-message">You won!</p>
      )}
    </div>
  );
};

export default MemoryGame;
