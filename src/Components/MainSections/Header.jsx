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
            <h2 className='header-header2'>Development</h2>
            <h2 className='header-header2'>Data Specialist</h2>
            <h2 className='header-header2'>_____</h2>
            <br></br>
        </div>
        </div>
    </div>
  );
}