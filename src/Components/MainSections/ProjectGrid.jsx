import React from 'react';
import '../../../Styling/ProjectGrid.css'; 
import MeteorMap from '../../assets/meteor.png';
import CarbonEmissions from '../../assets/CarbonEmissions.png';
import Cluster from '../../assets/cluster.png';
import FreeStroke from '../../assets/FreeStroke.png';
import GovtSpend from '../../assets/govtspend.png';
import LEGraph from '../../assets/legraph.png';
import StoreDB from '../../assets/DB.png';
import honeycomb from '../../assets/honeycomb5.jpeg'
import YogaSite from '../../assets/YogaSite.png'
import NewsSite from '../../assets/news.png'

export default function ProjectGrid() {
    const images = [honeycomb, YogaSite, CarbonEmissions, Cluster, FreeStroke, honeycomb, GovtSpend, NewsSite, MeteorMap, LEGraph, StoreDB, honeycomb];
    const headers = ['', 'Web Development: Yoga Classes Site', 'Data Visualisation: Carbon Emissions', 'Machine Learning: Cluster Analysis', 'App Development: Outdoor Swim Spots', '','Data Visualisation: Government Spending', 'Web Development: News Site', 'Data Visualisation: Meteor Landings', 'Data Analysis: Life Expectancy', 'Dashboard: Superstore Metrics']
    const descriptions = ['', 'Website to display weekly yoga classes for a local yoga instructor', 'Carbon Emissions visualised by country each year since 1970', 'Customer Segmentation model to aid in ore targeted and effective strategies', 'React Native mobile app created to help users find safe swim spots', '', 'Interactive zoomable circle chart using d3.js', 'Website to display news articles by topic, with comments and likes', 'API meteor landings data to create a visual map', 'Exploratory Data Analysis project investigating life expectancy', 'Interactive dashboard created using Tableau to show key metrics']
    const links = ['', 'https://graceyogamcr.com/', '/carbonemissions', '/clusteranalysis', '/freestroke', '', '/governmentspend', 'https://me-news.netlify.app/news', '/meteormap', '/lifeexpectancy', '/supermarketmetrics']

    return (
        <>
          <div className="project-grid">
            {images.slice(0, 6).map((image, index) => (
              <div key={index} className="honeycomb">
                {links[index] ? (
                  <a href={links[index]} className="project-link" target={index === 1 ? "_blank" : ""}>
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
                  <a href={links[index + 5]} className="project-link" target={index === 5 ? "_blank" : ""}>
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
