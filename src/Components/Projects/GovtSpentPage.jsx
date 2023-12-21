import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'
import CircleChart from "./Components/CircleChart";
import React, { useEffect } from 'react';

export default function GovtSpendPage() {
    let timeAgo = "";
    if (Date.parse("2023-12-01T11:13:00.000Z")) {
        timeAgo = formatDistanceToNow(new Date("2023-12-01T11:13:00.000Z"), { addSuffix: true });
    }

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <div className='projects-page'>
        <Link to="/" className="back-button">
            &laquo;
        </Link>
        <div className="projects-info">
            <p className="time-ago">⏲️ {timeAgo}</p>
        </div>
        <h2>Government Spending Data Visualisation</h2>
        <p className='project-description'>Visualisation showing Government Spending in 2022-23, created using d3.js.</p>
        <p className='project-description'>Click and circle to zoom in and see a more detailed breakdown of sub-functions. Best viewed on a laptop.</p>
        <br></br>
        <div className='d3-project'>
        <CircleChart/>
        </div>
        <h3>Key Information</h3>
      <p>
        <h4>Data Source</h4> The data used for this visualisation is sourced from the government's expenditure records for the fiscal year 2022-23: <a href="https://www.gov.uk/government/statistics/public-expenditure-statistical-analyses-2023" target="_blank">Gov.uk Public Expenditure 2023</a></p>
      
      <h4>Methodology</h4>
      <p>
        The visualisation is implemented using D3.js, a powerful JavaScript library for creating data-driven graphics. The hierarchical data structure is represented using a circle-packing layout, providing an intuitive and hierarchical view of the government spending across different categories and subcategories.
      </p>
        <br></br>
      <h3>Value Proposition</h3>
      <p>
        <h4>Insights into Public Expenditure</h4> This visualisation aims to provide insights into the allocation and distribution of public funds across various government sectors, fostering a better understanding of budgetary priorities.
      </p>
      <p>
        <h4>Interactive Exploration</h4> Enhanced with interactive features, users can click and zoom into specific spending categories, gaining detailed information on sub-functions and facilitating a more granular exploration of government expenditure.
      </p>
      <br></br>
      <h3>Technologies Used</h3>
      <p>
        <h4>Languages</h4> JavaScript
      </p>
      <p>
        <h4>Libraries</h4> D3.js - A JavaScript library for producing dynamic, interactive data visualisations in web browsers.
      </p>
      
      <h4>Skills Demonstrated</h4>
      <p>
        Data Visualisation, Hierarchical Layouts, Interactive User Interfaces, JavaScript Programming, Information Design.
      </p>
        </div>
    );
}
