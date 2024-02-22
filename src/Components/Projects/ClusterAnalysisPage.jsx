import { Link  } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import '../../../Styling/Cluster.css'
import Boxplots from '../../assets/CA-Boxplots.png'
import Cluster from '../../assets/CA-Agglo.png'
import Spend from '../../assets/CA-Spend.png'
import PCA from '../../assets/CA-PCA.png'
import Elbow from '../../assets/CA-Elbow.png'
import Clean from '../../assets/CA-Clean.png'
import Banner from '../../assets/CA-Banner.jpeg'

export default function ClusterAnalysisPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
        preloadImages();
      }, [])

    const keyStepHeaders = ['Step 1: Data Cleaning and Preparation', 'Step 2: Principal Component Analysis (PCA)', 'Step 3: Elbow Method', 'Step 4: Agglomerative Clustering', 'Step 5: Visualising the Clusters', 'Step 6: Visualising the Clusters']
    const keyStepSubHead = ['', '', '','','Profiling based on income and spending', 'Visualising the clusters using box plots']
    const keyStepDesc = ['Many techniques used for cleaning the data including checking for nulls and outliers (histogram charts and boxplots), cleaning up field names, changing format of field values and engineering features.','Technique for diminishing the dimensionality of datasets. Its objective is to increase interpretability while simultaneously minimising the loss of information.', 'Employed to ascertain the optimal number of clusters to be formed.', 'Method of forming clusters by iteratively merging individual data points, starting with each as a separate cluster. This hierarchical approach helps reveal relationships and similarities within a dataset through step-by-step merging.', '', 'Visualising the cluster distribution through box plots provides valuable insights into the characteristics of each cluster, aiding in the formulation of targeted strategies for different account groups. This approach allows for a comprehensive understanding of how variables vary across clusters, guiding strategic decisions tailored to each group.']
    const keyStepImages = [Clean, PCA, Elbow, Cluster, Spend, Boxplots]
    const keyStepImageClass = ['histogram-image', 'PCA-image', 'normal-image', 'PCA-image', 'normal-image', 'boxplot-image']

    const [view, setView] = useState('Methodology');
    const [showJupyterInfo, setShowJupyterInfo] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [currentImage, setCurrentImage] = useState(keyStepImages[0])

    const toggleView = (option) => {
        setView(option);
    };

    const toggleJupyterInfo = () => {
        setShowJupyterInfo(prevState => !prevState);
        if (!showJupyterInfo) {
            const jupyterSection = document.getElementById("jupyter-section");
                window.scrollTo({
                    top: jupyterSection.offsetTop,
                    behavior: "smooth"
                });
         }
    };

    const nextStep = () => {
        setCurrentStep(prevStep => prevStep < keyStepHeaders.length - 1 ? prevStep + 1 : prevStep);
    };

    const prevStep = () => {
        setCurrentStep(prevStep => prevStep > 0 ? prevStep - 1 : prevStep);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
      };

    const preloadImages = () => {
        keyStepImages.forEach(image => {
          const img = new Image();
          img.onload = handleImageLoad;
          img.src = image;
        });
      };

    const jupyterRef = useRef(null);

    return (
        <>
        <img className='banner-image' src={Banner}></img>
        <div className='projects-page'>
            <Link to="/" className="back-button">
                &laquo;
            </Link>
            <div className="projects-info">
                <br/><br/>
            </div>
            <h2>Customer Segmentation using a Clustering Model</h2>
            <p className='project-description'>
                <h4>Objective</h4>
                <p>This analysis aims to identify distinct customer groups, enabling businesses to customise products based on unique traits, behaviours, and concerns. Segmenting customers aids tailored product offerings, optimising resources by directing marketing efforts towards receptive groups for increased efficiency and responsiveness.</p>
            </p>

            <div className='segment-window'>
                <div className='segment-banner'>
                    <div className="option-buttons">
                        <button onClick={() => toggleView('Methodology')} className={view === 'Methodology' ? 'selected' : ''}>Methodology</button>
                        <button onClick={() => toggleView('Results')} className={view === 'Results' ? 'selected' : ''}>Results</button>
                    </div>
                </div>
                {view === 'Methodology' && (
                    <>
                        <div className="option-buttons-arrows">
                            <button onClick={prevStep}>&lt;</button>
                            <button onClick={nextStep}>&gt;</button>
                        </div>
                        <div className="key-step">
                            <h3 className='key-step-header'>{keyStepHeaders[currentStep]}</h3>
                            {keyStepSubHead[currentStep] && <h4>{keyStepSubHead[currentStep]}</h4>}
                            <p className='key-step-desc'>{keyStepDesc[currentStep]}</p>
                            {imageLoaded && keyStepImages[currentStep] && <img src={keyStepImages[currentStep]} className={keyStepImageClass[currentStep]} alt={`Step ${currentStep + 1}`} />}
                        </div>
                        <br/><br/>
                    </>
                )}
                {view === 'Results' && (
                    <>
                        <div className="cluster-grid">
                            <div class="cluster-info" id="cluster-0">
                                <h3 className='cluster-header'>Cluster 0:</h3>
                                <p className='cluster-text'>Are not parents</p>
                                <p className='cluster-text'>High income group</p>
                                <p className='cluster-text'>Second highest spending group</p>
                                <p className='cluster-text'>Relatively older</p>
                                <p className='cluster-text'>Customer largely for groceries: fish, meat, fruits</p>
                            </div>

                            <div class="cluster-info" id="cluster-1">
                                <h3 className='cluster-header'>Cluster 1:</h3>
                                <p className='cluster-text'>Are parents</p>
                                <p className='cluster-text'>Relatively younger</p>
                                <p className='cluster-text'>Lowest spending group</p>
                                <p className='cluster-text'>Lowest income</p>
                            </div>

                            <div class="cluster-info" id="cluster-2">
                                <h3 className='cluster-header'>Cluster 2:</h3>
                                <p className='cluster-text'>Are parents</p>
                                <p className='cluster-text'>Relatively higher age</p>
                                <p className='cluster-text'>Mid income group</p>
                                <p className='cluster-text'>Mid spend group</p>
                                <p className='cluster-text'>Highest total purchases</p>
                                <p className='cluster-text'>Highest deals purchased</p>
                            </div>

                            <div class="cluster-info" id="cluster-3">
                                <h3 className='cluster-header'>Cluster 3:</h3>
                                <p className='cluster-text'>Are not parents</p>
                                <p className='cluster-text'>Highest income</p>
                                <p className='cluster-text'>Highest spending group</p>
                                <p className='cluster-text'>Customer largely for groceries and wines</p>
                            </div>

                            <div class="cluster-info" id="cluster-4">
                                <h3 className='cluster-header'>Cluster 4:</h3>
                                <p className='cluster-text'>Are parents</p>
                                <p className='cluster-text'>Lower end of spending</p>
                                <p className='cluster-text'>Lower end of income</p>
                                <p className='cluster-text'>Mid range age group</p>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <br/><br/>
            <div ref={jupyterRef}>
                    <button className='button-jupyter' onClick={toggleJupyterInfo}>
                        {showJupyterInfo ? 'Hide Jupyter Notebook and Key Information' : 'Click here to see Jupyter Notebook and Key Information'}
                    </button>
                    {showJupyterInfo && (
                        <>
                            <p>Please see below full Jupyter Notebook and Key Information below this.</p>
                            <br />
                            <iframe
                                className='jupyter-project'
                                title="Jupyter Notebook"
                                width="100%"
                                height="600px"
                                src="https://nbviewer.org/github/milbot1992/dataanalytics/blob/main/Customer%20Segmentation%20-%20Clustering.ipynb"
                                frameBorder="0"
                                allowFullScreen
                            />
                            <h3>Key Information</h3>
                            <h4>Technologies Used</h4>
                            <ul>
                                <li>Languages</li>
                                <p>Python for data analysis, clustering, and campaign optimisation.</p>
                                <li>Libraries</li>
                                <p>Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn.</p>
                            </ul>
                        </>
                    )}
                </div>
        </div>
        </>
    );
}
