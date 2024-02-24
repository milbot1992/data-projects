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
    const images = [honeycomb, YogaSite, CarbonEmissions, Cluster, StoreDB, honeycomb, GovtSpend, MeteorMap, FreeStroke, LEGraph, NewsSite, honeycomb];
    const headers = ['', 'Web Development: Yoga Classes Site', 'Data Visualisation: Carbon Emissions', 'Machine Learning: Cluster Analysis', 'Dashboard: Superstore Metrics', '', 'Data Visualisation: Government Spending', 'Data Visualisation: Meteor Landings', 'App Development: Outdoor Swim Spots', 'Data Analysis: Life Expectancy', 'Web Development: News Site']
    const descriptions = ['', 'Website to display weekly yoga classes for a local yoga instructor', 'Carbon Emissions visualised by country each year since 1970', 'Customer Segmentation model to aid in ore targeted and effective strategies', 'Interactive dashboard created using Tableau to show key metrics', '', 'Interactive zoomable circle chart using d3.js', 'API meteor landings data to create a visual map', 'React Native mobile app created to help users find safe swim spots', 'Exploratory Data Analysis project investigating life expectancy', 'Website to display news articles by topic, with comments and likes']
    const links = ['', 'https://graceyogamcr.com/', '/carbonemissions', '/clusteranalysis', '/supermarketmetrics', '', '/governmentspend', '/meteormap', '/freestroke', '/lifeexpectancy', 'https://me-news.netlify.app/news']

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
