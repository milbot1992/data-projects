import Cluster from '../../assets/cluster.png'

export default function ClusterAnalysisCard () {
    
    return (
        <section className="project-card">
        <img
        src={Cluster}
        alt={`a photo of 3D plot of the 5 clusters`}
        />
        <div className="project-card-content">
        <h2>Machine Learning: Cluster Analysis</h2>
        <h4 className='project-card-desc'>Customer Segmentation Analysis to aid more targeted and effective marketing strategies</h4>
        <br></br>
        </div>
    </section>
    );
}