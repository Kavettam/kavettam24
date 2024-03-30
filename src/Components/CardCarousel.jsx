import React, { useState, useEffect } from 'react';
import './CardCarousel.scss';

const CardCarousel = ({ cards }) => {
 const [activeIndex, setActiveIndex] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
 }, [cards]);

 return (
    <div className="card-carousel">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={card.image} alt={card.title} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
 );
};

export default CardCarousel;
