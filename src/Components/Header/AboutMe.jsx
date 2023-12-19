import React from 'react';
import '../../../Styling/AboutMe.css';
import Millie from '../../assets/Millie.jpg'

export default function AboutMe() {
    return (
        <>
            <div className='about-background'>
                <div className='about-grid'>
                    <div className='about-intro'>
                        <h4>ABOUT ME</h4>
                        <p className='about-text'>Hi my name is Millie. I am an energetic and imaginative data expert. I hold a Master's degree in Global Health with Statistics, and have also completed a Software Engineering bootcamp where I honed skills in Software and Data Engineering, including coding best practices. I also have a first class undergraduate degree in Chemistry, giving me a solid scientific foundation.</p>
                        <p className='about-text2'>I have always enjoyed problem-solving and working with formulas, and I have a strong ability to simplify intricate data projects and create innovative solutions.</p>
                        <p className='about-text2'>I have over 7 years experience in analytical roles, leading project teams, working extensively with big data, automating processes, creating machine learning algorithms, maintaining data warehouses, constructing data models, and visualising data to provide key insights.</p>
                        <br></br>
                        <p className='about-text3'>If you would like to chat further please reach out to me by email: ellismillie92@gmail.com</p>
                    </div>
                    <div>
                        <img className='about-image' src={Millie} alt="Image of site creator"></img>
                    </div>
                </div>
            </div>
        </>
    );
}
