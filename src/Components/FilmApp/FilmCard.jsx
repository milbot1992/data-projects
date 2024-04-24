import React, { useState } from 'react';
import '../../../Styling/FilmCard.css';

const FilmCard = ({ film }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="film-card">
      <div
        className="film-image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundImage: `url(${film.poster_url})` }}
      >
        {isHovered && (
          <div className="film-info-overlay">
            <h3 className="film-info">{film.title}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmCard;
