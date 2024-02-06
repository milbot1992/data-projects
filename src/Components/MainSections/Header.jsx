import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/Animation.json';
import '../../../Styling/Header.css';

export default function Header() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='background-header'>
        <div className='header clearfix'>
        <div className='header-image'>
            <Lottie options={lottieOptions} />
        </div>
        <div className='header-content'>
            <h1 className='header-header'>Millie Ellis</h1>
            <h2 className='header-header2'>Data Analysis</h2>
            <h2 className='header-header2'>Data Science</h2>
            <h2 className='header-header2'>Development</h2>
            <h2 className='header-header2'>_____</h2>

            <p className='intro1'>I specialise in translating intricate datasets into valuable and easily understandable insights.</p>
            <p className='intro2'>I use advanced analysis and visualisation techniques to effectively communicate results. My toolkit includes a diverse range of technologies including Tableau, Power BI, Python, JavaScript (React.js, d3.js, Chart.js, Leaflet.js, Node.js, Express.js), HTML, CSS, Adobe Illustrator and After Effects.</p>
            <br></br>
        </div>
        </div>
    </div>
  );
}