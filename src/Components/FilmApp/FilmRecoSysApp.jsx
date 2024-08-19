import React, { useState, useEffect } from 'react';
import UserDropdown from './UserDropdown';
import FilmList from './FilmList';
import axios from 'axios';
import '../../../Styling/FilmApp.css'

const FilmRecoSysApp = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [recommendedFilms, setRecommendedFilms] = useState([]);
  const [userFavouriteFilms, setUserFavouriteFilms] = useState([]);

  useEffect(() => {
    axios.get('https://polar-tundra-59037-60b79b86b2ff.herokuapp.com/trending_now')
      .then(response => {
        console.log('>>>>>', response);
        setTrendingFilms(response.data.trending_movies);
      })
      .catch(error => {
        console.error('Error fetching trending films:', error);
      });
  }, []);

  const fetchRecommendations = (userId) => {
    axios.get(`https://polar-tundra-59037-60b79b86b2ff.herokuapp.com/recommendations/${userId}`)
      .then(response => {
        setRecommendedFilms(response.data.recommended_films);
        setUserFavouriteFilms(response.data.user_favourite_films);
      })
      .catch(error => {
        console.error('Error fetching recommendations:', error);
      });
  };

  const handleUserSelect = (userId) => {
    if (userId) {
      fetchRecommendations(userId);
    } else {
      // Clear films if no user selected
      setRecommendedFilms([]);
      setUserFavouriteFilms([]);
    }
  };

  return (
    <div className="film-recommendation-app">
      <h2 className='film-reco-title'>Film Recommendation System</h2>
      <div className="films-section">
      <UserDropdown onSelectUser={handleUserSelect} />
        <h3 className='film-reco-subtitle'>Trending Now</h3>
        <FilmList films={trendingFilms} />
      </div>

      <div className="films-section">
        <h3 className='film-reco-subtitle'>Your Favourite Watched Films</h3>
        <FilmList films={userFavouriteFilms} />
      </div>
      <div className="films-section">
        <h3 className='film-reco-subtitle'>Recommended Films</h3>
        <FilmList films={recommendedFilms} />
      </div>
    </div>
  );
};

export default FilmRecoSysApp;
