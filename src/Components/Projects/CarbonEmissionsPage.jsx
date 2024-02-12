import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'
import React, { useEffect, useState, useRef } from 'react';
import Banner from '../../assets/CE-Banner.jpeg'

export default function CarbonEmissionsPage () {
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
      <>
        <img className='banner-image' src={Banner}></img>
        <div className='projects-page'>
          <Link to="/" className="back-button">
              &laquo;
          </Link>
          <div className="projects-info">
              <br></br><br></br>
          </div>
          <h2 className='carbon-emissions-header'>Carbon Emissions Visualisation</h2>
          <p className='project-description'>A Tableau Dashboard with a HTML animation - showing carbon emissions per country each year since 1970. Best viewed on a laptop - click <a href="https://public.tableau.com/views/CarbonEmissionsByCountry_17047211863020/GlobalEmissions?:embed=y&:display_count=yes:showVizHome=no#2" target="_blank">here</a> to navigate to the interactive dashboard with optimised mobile view.</p>
          <br></br>
          <iframe src="https://public.tableau.com/views/CarbonEmissionsByCountry_17047211863020/GlobalEmissions?:embed=y&:display_count=yes:showVizHome=no#2" width="1000" height="980"frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          <br></br>
            <div ref={keyInfoRef}>
                      <button className='button-keyinfo' onClick={toggleKeyInfo}>
                          {showKeyInfo ? 'Hide Key Information' : 'Click here to see Key Information'}
                      </button>
                      {showKeyInfo && (
                        <>
                          <h3>Key Information</h3>
                          <p>
                            <h4>Data Source</h4>

                          EDGAR - Emissions Database for Global Atmospheric Research 2022 CO2 Emissions Report

                          Crippa, M., Guizzardi, D., Banja, M., Solazzo, E., Muntean, M., Schaaf, E., Pagani, F., Monforti-Ferrario, F., Olivier, J., Quadrelli, R., Risquez Martin, A., Taghavi-Moharamli, P., Grassi, G., Rossi, S., Jacome Felix Oom, D., Branco, A., San-Miguel-Ayanz, J. and Vignati, E., CO2 emissions of all world countries - JRC/IEA/PBL 2022 Report, EUR 31182 EN, Publications Office of the European Union, Luxembourg, 2022, doi:10.2760/730164, JRC130363.
                          </p>

                          <h4>Methodology</h4>
                          <p>
                            The visualisation leverages various technologies to deliver an impactful representation of carbon emissions. Tableau was used for creating detailed data visualisations and charts, Adobe Illustrator was employed for creating intricate illustrations, Adobe After Effects is used to create the animation, and the Bodymovin plugin aids in transforming the animation into HTML format. Python, with the pandas library, was employed for data manipulation to ensure accuracy and relevance.
                          </p>
                          <br></br>

                          <h3>Value Proposition</h3>
                          <p>
                            <h4>Highlighting CO2 Emissions</h4> This visualisation aims to shed light on the substantial amounts of CO2 emitted annually, focusing on the major contributors to global carbon emissions.
                          </p>
                          <p>
                            <h4>Interactive Exploration</h4> Enhanced with interactive features, users can explore and understand carbon emissions from the top 10 contributors each year. The visual elements, created using Adobe Illustrator and After Effects, add a dynamic dimension to the data.
                          </p>
                          <br></br>

                          <h3>Technologies Used</h3>
                          <p>
                            <h4>Languages</h4> Python (pandas for data manipulation)
                          </p>
                          <p>
                            <h4>Visualisation Tools</h4> Tableau, Adobe Illustrator, Adobe After Effects
                          </p>
                          <p>
                            <h4>Animation Conversion</h4> Bodymovin plugin for After Effects to convert animations to HTML format
                          </p>

                          <h4>Skills Demonstrated</h4>
                          <p>
                            Data Visualisation, Analysis, Animation, Interactive User Interfaces, Python Programming, Information Design
                          </p>
                          </>
                        )}
            </div>
        </div>
        </>
    );
}
