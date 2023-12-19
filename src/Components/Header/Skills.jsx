import '../../../Styling/Skills.css';
import React from 'react';
import DataAnalysis from '../../assets/Analysis.png'
import DataScience from '../../assets/DataScience.png'
import Dashboard from '../../assets/Dashboard.png'
import DataVisualisation from '../../assets/DataVisualisation.png'


export default function Skills() {

    return (
        <>
            <div className='skills-box'>
                <div className='skills-intro'>
                <h3 className='skills-title'>SKILLSET</h3>
                <p className='skills-first'>As a seasoned data analyst with extensive experience in data science, I specialise in translating intricate datasets into valuable and easily understandable insights.</p>
                <p className='skills-first'> With proficiency in machine learning, both supervised and unsupervised algorithms, I employ advanced analysis and visualisation techniques to effectively communicate results. My toolkit includes a diverse range of technologies such as SQL, R, Python, Javascript, and Tableau.</p>
                <br></br>
                </div>
                <div className='skills-grid'>
                    <div className='skill-section'>
                        <div>
                            <img className='skills-image' src={DataAnalysis} alt="Image depicting data analysis"></img>
                        </div>
                        <div>
                            <h4>Data analysis</h4>
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
                            <p className='skills-text'>My expertise in data visualisation centers on harnessing sophisticated techniques to craft compelling and informative visual representations. I excel in translating intricate datasets into visually accessible formats,</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
