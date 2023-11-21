import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Dendrogram from '../../assets/Cluster.png'

export default function ClusterAnalysisCard () {
    const timeAgo = formatDistanceToNow(new Date("2023-11-21T11:13:00.000Z"), { addSuffix: true });
    
    return (
        <section className="project-card">
        <img
        src={Dendrogram}
        alt={`a photo of a dendrogram analysis graph`}
        />
        <div className="project-card-content">
        <h2>Cluster Analysis</h2>
        <h4 className='project-card-desc'>Clustering Heart Disease Patients to investigate whether treatments could be targeted more effectively</h4>
        <p>⏲️{timeAgo}</p><br></br><br></br><br></br>
        </div>
    </section>
    );
}