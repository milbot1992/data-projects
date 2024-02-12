import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'
import React, { useEffect, useState, useRef } from 'react';

export default function StoreDashboardPage() {
    const [showKeyInfo, setShowKeyInfo] = useState(false);

    useEffect(() => {
          window.scrollTo(0, 0)
        }, [])
  
    const toggleKeyInfo = () => {
        setShowKeyInfo(prevState => !prevState);
          if (!showKeyInfo) {
              const jupyterSection = document.getElementById("jupyter-section");
                  window.scrollTo({
                      top: jupyterSection.offsetTop,
                      behavior: "smooth"
                  });
           }
      };

    const keyInfoRef = useRef(null);

    return (
        <div className='projects-page'>
        <div>
            <Link to="/" className="back-button">
                &laquo;
            </Link>
            <div className="projects-info">
                <br></br><br></br>
            </div>
            <h2>Global Supermarket Metrics Dashboard</h2>
            <p className='project-description'>The dashboard below is an example focusing on sales and profit of a global supermarket, visualising essential metrics and providing users with the autonomy to explore and analyse data independently. This particular dashboard, powered by Tableau, is tailored to reveal insights through dynamic filters and interactive features like tooltips. It allows users to actively engage with the information, offering a personalised and intuitive experience.</p>

            <p className='project-description'>Best viewed on a laptop - click <a href="https://public.tableau.com/app/profile/millie.ellis6600/viz/GlobalSuperstorePerformanceMetrics/Dashboard1?publish=yes" target="_blank">here</a> to navigate to the interactive dashboard with optimised mobile view.</p>
        </div>

        <div className='dashboard-colour-banner'>
                <div className='dashboard-three'>
                    <div>
                        <h4 className='dashboard-h4'>GOAL</h4>
                        <p className='SS-text'>The primary function of a dashboard is to provide a quick overview of key performance indicators (KPIs) and results. Dashboards offer an interactive means to assess the performance of a company or project at a glance.</p>
                    </div>
                    <div>
                        <h4 className='dashboard-h4'>RESULTS</h4>
                        <p className='SS-text'>Through using dashboards, you can effectively uncover insights. This user-friendly tool enables you to personally apply filters and refer to various graphs. Having instant access to accurate information facilitates informed decision-making.</p>
                    </div>
                    <div>
                        <h4 className='dashboard-h4'>DURATION</h4>
                        <p className='SS-text'>Typically, creating a dashboard takes 2 weeks to 2 months. This process has two phases:</p>
                        <p className='SS-text'>1. Selection of KPIs and dashboard design</p>
                        <p className='SS-text'>2. Gathering data and developing the dashboard</p>
                    </div>
                </div>
        </div>
        <br></br><br></br>
        <div>
        <iframe className='DB-jupyter' src="https://public.tableau.com/views/GlobalSuperstorePerformanceMetrics/Dashboard1?:embed=y&:display_count=yes:showVizHome=no" width="1200" height="777"frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div ref={keyInfoRef}>
                      <button className='button-keyinfo' onClick={toggleKeyInfo}>
                          {showKeyInfo ? 'Hide Key Information' : 'Click here to see Key Information'}
                      </button>
                      {showKeyInfo && (
                        <>
                            <h3>Key Information</h3>
                            <h4>Data Source</h4>
                            <p>The data utilised in this Tableau dashboard is sourced from the Global Superstore dataset, providing insights into sales, profit, and quantity metrics: <a href="https://www.kaggle.com/datasets/apoorvaappz/global-super-store-dataset" target="_blank">Global Superstore Dataset on Kaggle</a></p>

                            <h4>Methodology</h4>
                            <p>The dashboard is created using Tableau, a powerful data visualisation platform. Various interactive charts and graphs showcase key metrics, enabling users to explore global superstore sales, profit, and quantity trends visually.</p>
                            <br></br>
                        </>
                        )}
            </div>

        </div>
        </div>
    );
}