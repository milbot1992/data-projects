import '../../../Styling/Skills.css';
import React from 'react';
import DataAnalysis from '../../assets/Analysis.png'
import DataScience from '../../assets/DataScience.png'
import Dashboard from '../../assets/Dashboard.png'
import DataVisualisation from '../../assets/DataVisualisation.png'
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function SkillsGrid() {
    const { scrollY } = useViewportScroll();

    const opacity = useTransform(scrollY, [350, 800], [0, 1]);

    return (
        <>
            <div className='skills-box'>
                <motion.div style={{ opacity }}>
                    <div className='skills-border'>
                        <div className='skills-grid'>
                            <div className='skill-section'>
                                <div>
                                    <img className='skills-image' src={Dashboard} alt="Image depicting data analysis"></img>
                                </div>
                                <div>
                                    <h4>Web and App Development</h4>
                                    <p className='skills-text'>I use a range of front-end and back-end technologies including Javascript (React, React Native), Typescript, HTML, CSS, Firebase and Supabase to create engaging and interactive web and mobile applications.</p>
                                </div>
                            </div>
                            <div className='skill-section'>
                                <div>
                                    <img className='skills-image' src={DataVisualisation} alt="Image depicting data analysis"></img>
                                </div>
                                <div>
                                    <h4>Data Visualisations</h4>
                                    <p className='skills-text'>I am able to use a wide range of tools including Tableau, Javascript (d3.js, Chart.js, Leaflet.js), Python, Power BI, HTML, CSS, Adobe Illustrator and After Effects to create engaging and informative visual representations, including dashboards.</p>
                                </div>
                            </div>
                            <div className='skill-section'>
                                <div>
                                    <img className='skills-image' src={DataAnalysis} alt="Image depicting data analysis"></img>
                                </div>
                                <div>
                                    <h4>Data Analysis</h4>
                                    <p className='skills-text'>I have broad experience in finding valuable insights from data and translating them into a clear and understable narrative. I am highly skilled at identifying trends and creating visuals to present the findings and data-driven recommendations.</p>
                                </div>
                            </div>
                            <div className='skill-section'>
                                <div>
                                    <img className='skills-image' src={DataScience} alt="Image depicting data analysis"></img>
                                </div>
                                <div>
                                    <h4>Data Science</h4>
                                    <p className='skills-text'>I use advanced analytical techniques including machine learning algorithms to pull meaningful patterns and insights from complex datasets. I use innovative and creative solutions to address real-world challenges.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
