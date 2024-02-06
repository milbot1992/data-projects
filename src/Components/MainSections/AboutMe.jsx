import React from 'react';
import '../../../Styling/AboutMe.css';
import Millie from '../../assets/Millie.jpg'
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function AboutMe() {
    const { scrollY } = useViewportScroll();

    const opacity = useTransform(scrollY, [1000, 1500], [0, 1]);

    return (
        <>
            <div className='about-background'>
            <motion.div style={{ opacity }}>
                <div className='about-grid'>
                    <div className='about-intro'>
                        <h4>ABOUT ME</h4>
                        <p className='about-text'>Hi my name is Millie. I am an energetic and imaginative data expert. I hold a Master's degree in Global Health with Statistics, and have also completed a Software Engineering bootcamp where I advanced my skills in back-end and front-end Software and Data Engineering, including coding best practices. I also have a first class undergraduate degree in Chemistry, giving me a solid scientific foundation.</p>
                        <p className='about-text2'>I have always enjoyed problem-solving and working with formulas, and I have a strong ability to simplify intricate data projects and create innovative solutions.</p>
                        <p className='about-text2'>I have over 7 years experience in analytical roles, leading project teams, working extensively with big data, automating processes, creating algorithms, maintaining the data warehouse, constructing data models, and visualising data to provide key insights.</p>
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
