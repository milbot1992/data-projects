import React from 'react';
import '../../../Styling/ProjectGrid.css'; 
import MeteorMap from '../../assets/meteor.png';
import CarbonEmissions from '../../assets/CarbonEmissions.png';
import Cluster from '../../assets/cluster.png';
import FreeStroke from '../../assets/FreeStroke.png';
import GovtSpend from '../../assets/govtspend.png';
import LEGraph from '../../assets/legraph.png';
import honeycomb from '../../assets/honeycomb5.jpeg'
import YogaSite from '../../assets/YogaSite.png'
import NewsSite from '../../assets/news.png'
import FilmSysCard from '../../assets/FilmSysCard.png'
import ChatBotCard from '../../assets/ChatBotScreenshotSmall.png'

export default function ProjectGrid() {
  const images = [FilmSysCard, ChatBotCard, YogaSite, CarbonEmissions, FreeStroke, honeycomb, NewsSite, Cluster, GovtSpend, MeteorMap, LEGraph, honeycomb];
  const headers = ['Full-Stack: Film Recommendation System App', 'Full-Stack: Chatbot using AI', 'Web Development: Yoga Classes Site', 'Data Visualisation: Carbon Emissions', 'App Development: Outdoor Swim Spots', '', 'Web Development: News Site', 'Machine Learning: Cluster Analysis', 'Data Visualisation: Government Spending', 'Data Visualisation: Meteor Landings', 'Data Analysis: Life Expectancy']
  const descriptions = ['Provides personalised film recommendations. ML powered Python back-end', 'AI powered Chatbot to give fitness recommendations','Website to display weekly yoga classes for a local yoga instructor', 'Carbon Emissions visualised by country each year since 1970', 'React Native mobile app created to help users find safe swim spots', '', 'RestFUL API and React frontend - website to display news articles by topic', 'Customer Segmentation model to aid in ore targeted and effective strategies', 'Interactive zoomable circle chart using d3.js', 'API meteor landings data to create a visual map', 'Exploratory Data Analysis project investigating life expectancy']
  const links = ['/recosys', '/chatbot', 'https://graceyogamcr.com/', '/carbonemissions', '/freestroke', '', 'https://me-news.netlify.app/news', '/clusteranalysis', '/governmentspend', '/meteormap', '/lifeexpectancy']
  
    return (
        <>
          <div className="project-grid">
            {images.slice(0, 6).map((image, index) => (
              <div key={index} className="honeycomb">
                {links[index] ? (
                  <a href={links[index]} className="project-link" target={index === 2 || index === 5? "_blank" : ""}>
                    <img src={image} alt={`Image ${index}`} />
                    <div className="project-card-overlay">
                      <h2 className='project-header'>{headers[index]}</h2>
                      <h4 className='project-card-desc'>{descriptions[index]}</h4>
                    </div>
                  </a>
                ) : (
                  <>
                    <img src={image} alt={`Image ${index}`} />
                    <div className="project-card-overlay">
                      <h2 className='project-header'>{headers[index]}</h2>
                      <h4 className='project-card-desc'>{descriptions[index]}</h4>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
    
          <div className="project-grid2">
            {images.slice(5).map((image, index) => (
              <div key={index + 5} className="honeycomb">
                {links[index + 5] ? (
                  <a href={links[index + 5]} className="project-link" target={index + 5 === 6 ? "_blank" : ""}>
                    <img src={image} alt={`Image ${index + 5}`} />
                    <div className="project-card-overlay">
                      <h2 className='project-header'>{headers[index + 5]}</h2>
                      <h4 className='project-card-desc'>{descriptions[index + 5]}</h4>
                    </div>
                  </a>
                ) : (
                  <>
                    <img src={image} alt={`Image ${index + 5}`} />
                    <div className="project-card-overlay">
                      <h2 className='project-header'>{headers[index + 5]}</h2>
                      <h4 className='project-card-desc'>{descriptions[index + 5]}</h4>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
    );
}
