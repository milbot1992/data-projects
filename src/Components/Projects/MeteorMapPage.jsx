import '../../../Styling/MeteorMap.css'
import React, { useEffect, useState } from 'react';
import { fetchMeteors } from '../../../api.js';
import MeteorMap from './Components/MeteorMap';
import Filters from './Components/Filters';
import { Link  } from "react-router-dom";
import MeteorTimeline from './Components/MeteorTimeLine.jsx'
import PaperClip from '../../assets/paperclip.png'
import Crane from '../../assets/crane.png'
import Arrow from '../../assets/arrow2.png'

export default function MeteorMapPage() {
    const [meteorList, setMeteorList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterYear, setFilterYear] = useState('');
    const [originalMeteorList, setOriginalMeteorList] = useState([]); 

    const meteorCount = meteorList.length

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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



    const filteredHeaderText = filterYear === '' ? '' : `Showing: Meteor Landings in ${filterYear}`;

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className='projects-container'>
        <Link to="/" className="back-button">
            &laquo;
        </Link>
        <div className="projects-info">
            <br></br><br></br>
        </div>
        <h2>Meteor Landings</h2>
        <br></br>
        <main className='main'>
            <p className='project-description'>Visualisation to show all recorded Meteor Landings across the world. Click any meteor point to view more information. Visualisations best viewed on a laptop.</p>
            <div className='meteor-viewer'>
                <div className='meteor-header-text'>
                        <h3>Meteor Landings</h3>
                </div>
                    <div className='visualising-text'>
                    <h3>Visualising</h3><h3 className='visualising-meteor-text'>{meteorCount}</h3><h3> Meteor Landings</h3>
                </div>
                <section>
                    <Filters setFilterYear={setFilterYear} setMeteorList = {setMeteorList} originalMeteorList = {originalMeteorList}/><br></br>
                </section>
                <p className = 'filtered-header-text'>{filteredHeaderText}</p>
                <MeteorMap meteorList={meteorList} />
                <br></br><br></br>
                <div className='meteor-section'>
                    <MeteorTimeline meteorList={meteorList} />
                    <img className='arrow' src={Arrow}></img>
                    <div className='weight-section'>
                        <div className='weight-subsection'>
                            <div className='weight-content'>
                                <h3 className='heaviest'>Heaviest</h3>
                                <h3>Hoba</h3>
                                <p>Namibia, 1920</p>
                                <p>Weight: 60,000,000g</p>
                            </div>
                            <img className='weight-meteors-image-1' src={Crane} alt='PaperClip' />
                        </div>

                        <div className='weight-subsection'>
                            <div className='weight-content'>
                                <h3>Yamato 8333</h3>
                                <p>Antarctica, 1983</p>
                                <p>Weight: 0.01g</p>
                                <h3 className='lightest'>Lightest</h3>
                            </div>
                            <img className='weight-meteors-image-2' src={PaperClip} alt='CrawlerCrane' />
                        </div>
                    </div>

                </div>
            </div>
            <br></br>
            <h3>Key Information</h3>
            <h4>Languages</h4>
            <p>Javascript: React, React Hooks, React Router, Leaflet and React-Leaflet, Chart.js, CSS</p>

            <h4>Data Processing</h4>
            <h5>Data Filtering and Manipulation</h5>
            <p>The data processing in this project involves fetching meteor data using the useEffect hook. Additionally, there's logic implemented to filter the data based on the selected year.</p>

            <h4>API Calls</h4>
            <p>The project utilises the fetchMeteors function, assumed to be in the api.js file, to make API calls and retrieve meteor data.</p>

            <h4>Data Source</h4>
            <p>The data for this visualisation is sourced from the NASA API: <a href="https://data.nasa.gov/resource/gh4g-9sfh.json" target="_blank">NASA Meteor Data API</a></p>
        </main>
        </div>
    );
}