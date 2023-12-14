import React from 'react';
import '../../../Styling/Header.css';
import { Link } from "react-router-dom";
import Mountains from '../../assets/Mountains.png'

export default function Header() {
    return (
        <div className='header clearfix'>
        <div className='header-image'>
            <img src={Mountains} alt="Header Background"></img>
        </div>
        <div className='header-content'>
            <h1 className='header-header'>Millie Ellis</h1>
            <h2 className='header-header2'>Data Analysis / Science / Development</h2>
        </div>
        </div>
    );
}
