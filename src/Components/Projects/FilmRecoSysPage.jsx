import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'
import React, { useEffect, useState, useRef } from 'react';
import Banner from '../../assets/FilmBanner.jpeg'

export default function FilmRecoSysPage () {
  const [showKeyInfo, setShowKeyInfo] = useState(false);

  useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  const toggleKeyInfo = () => {
      setShowKeyInfo(prevState => !prevState);
        if (!showKeyInfo) {
            const jupyterSection = document.getElementById("jupyter-section");
                window.scrollTo({
                    top: jupyterSection.offsetTop,
                    behavior: "smooth"
                });
         }
    };

    const keyInfoRef = useRef(null);

    return (
      <>
        <img className='banner-image' src={Banner}></img>
        <div className='projects-page'>
          <Link to="/" className="back-button">
              &laquo;
          </Link>
          <div className="projects-info">
              <br></br><br></br>
          </div>
          <h2 className='film-header'>Film Recommendation System</h2>
          <p className='project-description'>This film app offers personalised film recommendations based on user preferences. The app uses a Python-based Machine Learning recommendation system in the back-end and a React front-end, delivering film recommendations though an intuitive user interface.</p>
          <h4>Recommendation System</h4>
          <p className='project-description'>
            The backbone of the recommendation system is a Collaborative Filtering ML algorithm, which matches individuals with similar interests to provide personalised film suggestions. Powered by a cosine similarity matrix, this algorithm intelligently identifies user patterns and similarities, ensuring tailored recommendations. 
          </p>
          <h4>Integration</h4>
          <p className='project-description'>The back-end functions as an API which integrates seamlessly with the React front-end.</p>
          <h4>Live App</h4>
          <p className='project-description'>Explore the live app by clicking the button below. This is a demonstration using historical user data. You can change the user you are viewing using the dropdown options.</p>
          <a href="https://millie-ellis.com/filmapp" target="_blank" rel="noopener noreferrer" className="explore-button">
            Explore the live app here
          </a>
          <br></br><br></br>
          <p className='project-description'>
          The live app is also displayed in the iframe below. For the best experience on mobile, click the button above to view it in optimised mode.
          </p>
          <p className='project-description'>
            See key information below the iframe including links to the repos, data sources and technologies used.
          </p>
          <br></br>
          <iframe className='film-sys-iframe' src="https://millie-ellis.com/filmapp" width="1140" height="600"frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          <br></br>
            <div ref={keyInfoRef}>
                      <button className='button-keyinfo' onClick={toggleKeyInfo}>
                          {showKeyInfo ? 'Hide Key Information' : 'Click here to see Key Information'}
                      </button>
                      {showKeyInfo && (
                        <>
                        <h3>Key Information</h3>
                        <h4>Technologies Used</h4>
                        <ul>
                            <li>Languages: Python</li>
                            <li>Frameworks/Libraries: React</li>
                        </ul>
                        <h4>Back-end</h4>
                        <ul>
                            <li>Python API back-end GitHub Repo: <a href="https://github.com/milbot1992/film-recosys">https://github.com/milbot1992/film-recosys</a></li>
                        </ul>
                        <h4>Front-end</h4>
                        <ul>
                            <li>React Repo: <a href="https://github.com/milbot1992/data-projects">https://github.com/milbot1992/data-projects</a></li>
                        </ul>
                        <h4>Data Sources</h4>
                        <ul>
                            <li>Data source for users/ratings/movies metadata: <a href="https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset">https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset</a></li>
                            <li>Data source for movies info: <a href="https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset">https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset</a></li>
                        </ul>
                        <h4>API</h4>
                        <ul>
                            <li>TMDB API</li>
                        </ul>
                        </>
                        )}
            </div>
        </div>
        </>
    );
}
