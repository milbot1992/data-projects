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
        <iframe
                className='jupyter-project'
                title="Jupyter Notebook"
                width="100%"
                height="500px"
                src="https://nbviewer.org/github/milbot1992/dataanalytics/blob/main/Clustering%20Heart%20Disease%20Patients/Clustering%20Heart%20Disease%20Patients.ipynb"
                frameBorder="0"
                allowFullScreen
            />
            <h3>Key Information</h3>
                <h4>Objective</h4>
                <p>Evaluate the applicability of unsupervised clustering in guiding treatment decisions for heart disease patients.</p>

                <h4>Dataset</h4>
                <p>Anonymised patient data, providing a comprehensive view of various factors associated with heart disease. Find the dataset here: <a href="link_to_dataset" target="_blank">Kaggle Heart Disease Dataset</a></p>

                <h4>Methodology</h4>
                <p>Utilisation of Python for data analysis and clustering. Pandas for data manipulation, NumPy for numerical operations, and Scikit-learn for the KMeans clustering algorithm. Visualisation with Matplotlib and Seaborn.</p>

                <h4>Value Proposition</h4>
                <ul>
                    <li>Treatment Insights</li>
                    <p>Uncover patterns within patient data to assist doctors in tailoring treatments based on shared characteristics.</p>
                    <li>Decision Support</li>
                    <p>Provide a data-driven approach to supplement clinical decisions, potentially leading to more personalised and effective patient care.</p>
                    <li>Algorithmic Tools</li>
                    <p>Implementation of KMeans clustering, a widely used algorithm in unsupervised learning.</p>
                </ul>

                <h4>Technologies Used</h4>
                <ul>
                    <li>Languages</li>
                    <p>Python for comprehensive data analysis and clustering.</p>
                    <li>Libraries</li>
                    <p>Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn.</p>
                </ul>
        </div>
        
    );
}
