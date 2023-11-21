import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'

export default function ClusterAnalysisPage() {
    let timeAgo = "";
    if (Date.parse("2023-11-21T11:13:00.000Z")) {
        timeAgo = formatDistanceToNow(new Date("2023-11-21T11:13:00.000Z"), { addSuffix: true });
    }

    return (
        <div className='projects-container'>
        <Link to="/" className="back-button">
            &laquo;
        </Link>
        <div className="projects-info">
            <p className="time-ago">⏲️ {timeAgo}</p>
        </div>
        <h2>Clustering Heart Disease Patients</h2>
        <p className='project-description'>This analysis aims to explore the usefulness of unsupervised clustering algorithms in assisting doctors to understand which treatments might be effective for their patients. The dataset used in this analysis consists of anonymised information from patients diagnosed with heart disease. By clustering patients with similar characteristics, we can identify groups that are likely to respond similarly to specific treatments.</p>
        <h3>Languages</h3>
        <p>Python: pandas, random, os, numpy, sklearn (KMeans), kmeans, scipy (vq, sch), matplotlib, seaborn</p>
        <iframe
                className='jupyter-project'
                title="Jupyter Notebook"
                width="100%"
                height="600px"
                src="https://nbviewer.org/github/milbot1992/dataanalytics/blob/main/Clustering%20Heart%20Disease%20Patients/Clustering%20Heart%20Disease%20Patients.ipynb"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}
