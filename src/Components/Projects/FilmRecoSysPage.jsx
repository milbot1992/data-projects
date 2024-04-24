import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'
import React, { useEffect, useState, useRef } from 'react';
import Banner from '../../assets/CE-Banner.jpeg'

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
          <h2 className='carbon-emissions-header'>Film Recommendation System</h2>
          <p className='project-description'></p>
          <br></br>
          <iframe src="" width="1000" height="980"frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          <br></br>
            <div ref={keyInfoRef}>
                      <button className='button-keyinfo' onClick={toggleKeyInfo}>
                          {showKeyInfo ? 'Hide Key Information' : 'Click here to see Key Information'}
                      </button>
                      {showKeyInfo && (
                        <></>
                        )}
            </div>
        </div>
        </>
    );
}
