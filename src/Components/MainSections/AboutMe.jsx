import React from 'react';
import '../../../Styling/AboutMe.css';
import Millie from '../../assets/Millie.jpg'
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function AboutMe() {
    const { scrollY } = useViewportScroll();

    const opacity = useTransform(scrollY, [850, 1300], [0, 1]);

    return (
        <>
            <div className='about-background'>
            <motion.div style={{ opacity }}>
                <div className='about-grid'>
                    <div className='about-intro'>
                        <h4>ABOUT ME</h4>
                        <p className='about-text'>Hi my name is Millie. I am an energetic and imaginative data expert. I love working at the intersection of data analytics and software engineering – creating data driven applications that serve a purpose or highlight a key insight.</p>
                        <p className='about-text'>I have over 7 years experience working in analytical tech roles and spend a lot of time setting up my own projects also - especially in areas of interest or learning new skills.</p>
                        <p className='about-text2'>Please browse through a range of my projects below.</p>

                        <br></br>
                    </div>
                    <div>
                        <img className='about-image' src={Millie} alt="Image of site creator"></img>
                    </div>
                </div>
                </motion.div>
            </div>
        </>
    );
}
