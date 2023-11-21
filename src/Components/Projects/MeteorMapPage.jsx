import '../../../Styling/MeteorMap.css'
import React, { useEffect, useState } from 'react';
import { fetchMeteors } from '../../../api.js';
import MeteorMap from './Components/MeteorMap';
import Filters from './Components/Filters';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link  } from "react-router-dom";
import MeteorTimeline from './Components/MeteorTimeLine.jsx';

export default function MeteorMapPage() {
    const [meteorList, setMeteorList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterYear, setFilterYear] = useState('');
    const [originalMeteorList, setOriginalMeteorList] = useState([]); 

    const meteorCount = meteorList.length

    let timeAgo = "";
    if (Date.parse("2023-11-19T11:13:00.000Z")) {
        timeAgo = formatDistanceToNow(new Date("2023-11-19T11:13:00.000Z"), { addSuffix: true });
    }

    useEffect(() => {
        fetchMeteors()
        .then((meteorData) => {
            setOriginalMeteorList(meteorData)
            // Filter meteor data if a year is specified
            const filteredData = filterYear
            ? meteorData.filter((meteor) => meteor.year && meteor.year.includes(filterYear))
            : meteorData;

            setMeteorList(filteredData);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [filterYear]);

    const filteredHeaderText = filterYear === '' ? 'Map of All Recorded Meteor Landings' : `Map of Meteor Landings in ${filterYear}`;
    const filteredListText = filterYear === '' ? 'List of All Recorded Meteor Landings' : `List of Meteor Landings in ${filterYear}`;

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className='projects-container'>
        <Link to="/" className="back-button">
            &laquo;
        </Link>
        <div className="projects-info">
            <p className="time-ago">⏲️ {timeAgo}</p>
        </div>
        <h2>Meteor Landings</h2>
        <p className='project-description'>Please browse below all recorded Meteor Landings across the world.</p>
        <h3>Languages</h3>
        <p>Javascript: React, React Hooks, React Router, Leaflet and React-Leaflet, Chart.js, CSS</p>
        <h3>Data Processing</h3>
        <p>Data Filtering and Manipulation: The useEffect hook is used to fetch meteor data, and there's logic to filter the data based on the selected year.</p>
        <p>API Calls: The fetchMeteors function, which is assumed to be in the api.js file, is making API calls to retrieve meteor data.</p>
        <h3>Data Source</h3>
        <p className='project-description'>The data for this visualisation is from the NASA API: https://data.nasa.gov/resource/gh4g-9sfh.json</p>
        <section>
            <Filters setFilterYear={setFilterYear} setMeteorList = {setMeteorList} originalMeteorList = {originalMeteorList}/><br></br>
        </section>
        <main className='main'>
            <h3 className='main-h2'>{filteredHeaderText}</h3>
            <div className='visualising-text'>
            <h3>Visualising</h3><h3 className='visualising-meteor-text'>{meteorCount}</h3><h3> Meteor Landings</h3>
            </div>
            <MeteorMap meteorList={meteorList} />
            <br></br><br></br>
            <MeteorTimeline meteorList={meteorList} />
        </main>
        </div>
    );
}
