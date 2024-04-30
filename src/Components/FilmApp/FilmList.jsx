import React, { useRef, useState, useEffect } from 'react';
import FilmCard from './FilmCard';
import '../../../Styling/FilmList.css';

const FilmList = ({ films }) => {
  const scrollRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const isMobile = window.innerWidth <= 768; // Determine if the screen is mobile

  useEffect(() => {
    // Update scroll position when films change
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPos;
    }
  }, [scrollPos, films]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchMoveX = e.touches[0].clientX;
    const deltaX = touchStartX - touchMoveX;
    const sensitivity = 50;
  
    scrollRef.current.scrollLeft += deltaX * sensitivity;
    setTouchStartX(touchMoveX);
  };

  const handleScrollLeft = () => {
    setScrollPos(scrollPos - 200);
  };

  const handleScrollRight = () => {
    setScrollPos(scrollPos + 200);
  };

  return (
    <div className="film-list">
      {!isMobile && films.length > 5 && (
        <>
          <button className="scroll-button left" onClick={handleScrollLeft}>{'<'}</button>
          <button className="scroll-button right" onClick={handleScrollRight}>{'>'}</button>
        </>
      )}
      <div
        className="film-scroll-container"
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {films.map((film, index) => (
          <FilmCard key={index} film={film} />
        ))}
      </div>
    </div>
  );
};

export default FilmList;
