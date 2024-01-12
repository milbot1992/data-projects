import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Cluster from '../../assets/Cluster.png'

export default function ClusterAnalysisCard () {
    const timeAgo = formatDistanceToNow(new Date("2023-12-17T11:13:00.000Z"), { addSuffix: true });
    
    return (
        <section className="project-card">
        <img
        src={Cluster}
        alt={`a photo of 3D plot of the 5 clusters`}
        />
        <div className="project-card-content">
        <h2>Machine Learning: Cluster Analysis</h2>
        <h4 className='project-card-desc'>Customer Segmentation Analysis to aid more targeted and effective marketing strategies.</h4>
        <p>⏲️ {timeAgo}</p><br></br><br></br><br></br>
        </div>
    </section>
    );
}