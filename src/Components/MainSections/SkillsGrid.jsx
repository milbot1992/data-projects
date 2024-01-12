import '../../../Styling/Skills.css';
import React from 'react';
import DataAnalysis from '../../assets/Analysis.png'
import DataScience from '../../assets/DataScience.png'
import Dashboard from '../../assets/Dashboard.png'
import DataVisualisation from '../../assets/DataVisualisation.png'
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function SkillsGrid() {
    const { scrollY } = useViewportScroll();

    const opacity = useTransform(scrollY, [500, 950], [0, 1]);

    return (
        <>
            <div className='skills-box'>
                <motion.div style={{ opacity }}>
                    <div className='skills-border'>
                        <div className='skills-grid'>
                            <div className='skill-section'>
                                <div>
                                    <img className='skills-image' src={DataAnalysis} alt="Image depicting data analysis"></img>
                                </div>
                                <div>
                                    <h4>Data Analysis</h4>
                                    <p className='skills-text'>I specialise in extracting valuable insights from data, distilling them into clear and concise reports or tools. My expertise lies in presenting results, identifying trends, and offering well-defined recommendations.</p>
                                </div>
                            </div>
                            <div className='skill-section'>
                                <div>
                                    <img className='skills-image' src={DataScience} alt="Image depicting data analysis"></img>
                                </div>
                                <div>
                                    <h4>Data Science</h4>
                                    <p className='skills-text'>Leveraging advanced analytical techniques to extract meaningful patterns and insights from complex datasets. I excel in implementing innovative solutions to address real-world challenges.</p>
                                </div>
                            </div>
                            <div className='skill-section'>
                                <div>
                                    <img className='skills-image' src={Dashboard} alt="Image depicting data analysis"></img>
                                </div>
                                <div>
                                    <h4>Dashboards</h4>
                                    <p className='skills-text'>Dashboards dynamically display key insights in an interactive format, allowing users to delve into the data themselves.</p>
                                </div>
                            </div>
                            <div className='skill-section'>
                                <div>
                                    <img className='skills-image' src={DataVisualisation} alt="Image depicting data analysis"></img>
                                </div>
                                <div>
                                    <h4>Data Visualisations</h4>
                                    <p className='skills-text'>I am able to use a wide range of tools including Tableau, Javascript (d3.js, Chart.js, Leaflet.js), Python, and Adobe Illustrator to craft engaging and informative visual representations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
