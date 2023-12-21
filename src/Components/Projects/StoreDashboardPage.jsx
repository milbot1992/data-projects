import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'
import DBImage from '../../assets/FullDB.png'
import React, { useEffect } from 'react';

export default function StoreDashboardPage() {
    let timeAgo = "";
    if (Date.parse("2023-12-11T11:13:00.000Z")) {
        timeAgo = formatDistanceToNow(new Date("2023-12-11T11:13:00.000Z"), { addSuffix: true });
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='projects-page'>
        <div>
            <Link to="/" className="back-button">
                &laquo;
            </Link>
            <div className="projects-info">
                <p className="time-ago">⏲️ {timeAgo}</p>
            </div>
            <h2>Global Supermarket Metrics Dashboard</h2>
            <p className='project-description'>The dashboard below is an example focusing on sales and profit of a global supermarket, visualising essential metrics and providing users with the autonomy to explore and analyse data independently. This particular dashboard, powered by Tableau, is tailored to reveal insights through dynamic filters and interactive features like tooltips. It allows users to actively engage with the information, offering a personalised and intuitive experience.</p>

            <p className='project-description'>Screenshot of the dashboard is below and click <a href="https://public.tableau.com/app/profile/millie.ellis6600/viz/GlobalSuperstorePerformanceMetrics/Dashboard1?publish=yes" target="_blank">here</a> to navigate to the interactive dashboard.</p>
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
            <img
                className='tableau-DB'
                src={DBImage}
                alt={`a screenshot of an interactive dashboard showing global supermarket data`}
            />
            <h3>Key Information</h3>
                <h4>Data Source</h4>
                <p>The data utilised in this Tableau dashboard is sourced from the Global Superstore dataset, providing insights into sales, profit, and quantity metrics: <a href="https://www.kaggle.com/datasets/apoorvaappz/global-super-store-dataset" target="_blank">Global Superstore Dataset on Kaggle</a></p>

                <h4>Methodology</h4>
                <p>The dashboard is created using Tableau, a powerful data visualisation platform. Various interactive charts and graphs showcase key metrics, enabling users to explore global superstore sales, profit, and quantity trends visually.</p>
                <br></br>
        </div>
        </div>
    );
}