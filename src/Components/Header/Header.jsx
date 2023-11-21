import React from 'react';
import '../../../Styling/Header.css';
import lightbulbImage from '../../assets/lightbulb.png'
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Nav() {
    return (
        <div className='header clearfix'>
        <div className='header-content'>
            <h1 className='header-header'>Millie Ellis</h1>
            <h2 className='header-header2'>Data Analyst / Developer</h2>
            <h3 className='header-header3' >This is a portfolio website that I created to display various data projects that I have completed. This website shocases both my skills with development as I created this website using React (Javascript), as well as my data analyis and data science skills. Click below to read more about this portfolio site.</h3>
            <Link to={`/portfolio`}>
                <h2 className='click-here-button'>Click here</h2>
            </Link>
        </div>
        <div className='header-image'>
            <img src={lightbulbImage} alt="Header Background"></img>
        </div>
        </div>
    );
}
