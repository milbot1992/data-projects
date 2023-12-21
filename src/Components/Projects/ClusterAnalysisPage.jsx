import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link  } from "react-router-dom";
import React, { useEffect } from 'react';
import '../../../Styling/ProjectPages.css'
import Boxplots from '../../assets/Boxplots.png'
import Cluster from '../../assets/PCA.png'
import Spend from '../../assets/Spend.png'


export default function ClusterAnalysisPage() {
    let timeAgo = "";
    if (Date.parse("2023-12-17T11:13:00.000Z")) {
        timeAgo = formatDistanceToNow(new Date("2023-12-17T11:13:00.000Z"), { addSuffix: true });
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
        <h2>Customer Segmentation using a Clustering Model</h2>
        <p className='project-description'>
        <h4>Objective</h4>
        <p>This analysis aims to identify distinct customer groups, enabling businesses to customise products based on unique traits, behaviours, and concerns. 
            Segmenting customers aids tailored product offerings, optimising resources by directing marketing efforts towards receptive groups for increased efficiency and responsiveness.</p>
        </p>
        <h4>Methodology</h4>
        <p>Utilisation of Python for data analysis, clustering, and campaign optimisation. Employing Pandas for data manipulation, NumPy for numerical operations, Scikit-learn for clustering algorithms, and visualising insights with Matplotlib and Seaborn.</p>

        
        <h3>Key Steps</h3>
        <h4>Principal Component Analysis (PCA)</h4>
        <p>Technique for diminishing the dimensionality of datasets. It's objective is to increase interpretability while simultaneously minimising the loss of information.</p>
        <h4>Elbow Method</h4>
        <p>Employed to ascertain the optimal number of clusters to be formed.</p>
        <h4>Agglomerative Clustering</h4>
        <p>Method of forming clusters by iteratively merging individual data points, starting with each as a separate cluster. This hierarchical approach helps reveal relationships and similarities within a dataset through step-by-step merging.</p>
        <img
        src={Cluster}
        className='customer-seg-img'
        alt={`a photo of a 3D plot visualising the 5 clusters`}
        />
        <h4>Visualising the Clusters</h4>
        <h5>Profiling based on income and spending</h5>
        <img
        src={Spend}
        className='customer-seg-img'
        alt={`a photo of a plot visualising the relationship between income and spending for the 5 clusters`}
        />
        <h5>Visualising the clusters using box plots</h5>
        <p>Visualising the cluster distribution through box plots provides valuable insights into the characteristics of each cluster, aiding in the formulation of targeted strategies for different account groups. This approach allows for a comprehensive understanding of how variables vary across clusters, guiding strategic decisions tailored to each group.</p>
        <img
        src={Boxplots}
        className='customer-seg-img'
        alt={`a photo of a box plots visualising the difference between clusters`}
        />
        <br></br>
        <h3>Results: Profiling</h3>
        <div class="cluster-grid">
            <div class="cluster-info" id="cluster-0">
                <h3>Cluster 0:</h3>
                <p className='cluster-text'>Are not parents</p>
                <p className='cluster-text'>High income group</p>
                <p className='cluster-text'>Second highest spending group</p>
                <p className='cluster-text'>Relatively older</p>
                <p className='cluster-text'>Customer largely for groceries: fish, meat, fruits</p>
            </div>

            <div class="cluster-info" id="cluster-1">
                <h3>Cluster 1:</h3>
                <p className='cluster-text'>Are parents</p>
                <p className='cluster-text'>Relatively younger</p>
                <p className='cluster-text'>Lowest spending group</p>
                <p className='cluster-text'>Lowest income</p>
            </div>

            <div class="cluster-info" id="cluster-2">
                <h3>Cluster 2:</h3>
                <p className='cluster-text'>Are parents</p>
                <p className='cluster-text'>Relatively higher age</p>
                <p className='cluster-text'>Mid income group</p>
                <p className='cluster-text'>Mid spend group</p>
                <p className='cluster-text'>Highest total purchases</p>
                <p className='cluster-text'>Highest deals purchased</p>
            </div>

            <div class="cluster-info" id="cluster-3">
                <h3>Cluster 3:</h3>
                <p className='cluster-text'>Are not parents</p>
                <p className='cluster-text'>Highest income</p>
                <p className='cluster-text'>Highest spending group</p>
                <p className='cluster-text'>Customer largely for groceries and wines</p>
            </div>

            <div class="cluster-info" id="cluster-4">
                <h3>Cluster 4:</h3>
                <p className='cluster-text'>Are parents</p>
                <p className='cluster-text'>Lower end of spending</p>
                <p className='cluster-text'>Lower end of income</p>
                <p className='cluster-text'>Mid range age group</p>
            </div>
        </div>
        <br></br><br></br>
        <p>Please see below full Jupyter Notebook and Key Information below this.</p>
        <br></br>
        <iframe
                className='jupyter-project'
                title="Jupyter Notebook"
                width="100%"
                height="500px"
                src="https://nbviewer.org/github/milbot1992/dataanalytics/blob/main/Customer%20Segmentation%20-%20Clustering.ipynb"
                frameBorder="0"
                allowFullScreen
            />
            
        <h3>Key Information</h3>
        <h4>Value Proposition</h4>
        <ul>
            <li>Segmentation Insights</li>
            <p>Uncover patterns within customer data to facilitate tailored marketing campaigns based on shared characteristics.</p>
            <li>Resource Optimisation</li>
            <p>Enable businesses to allocate resources more efficiently by focusing marketing efforts on the most responsive customer segments.</p>
            <li>Targeted Marketing</li>
            <p>Implement a strategic approach to marketing, tailoring campaigns to specific customer groups for a more personalised and effective outreach.</p>
        </ul>
        <h4>Technologies Used</h4>
        <ul>
            <li>Languages</li>
            <p>Python for data analysis, clustering, and campaign optimisation.</p>
            <li>Libraries</li>
            <p>Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn.</p>
        </ul>
        </div>
        
    );
}
