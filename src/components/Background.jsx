import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <div className="background">
      <div className="moon"></div>
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star static-star"></div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="star falling-star"></div>
        ))}
      </div>
    </div>
  );
};

export default Background;
