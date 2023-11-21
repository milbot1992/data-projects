import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'

export default function PortfolioPage() {
    let timeAgo = "";
    if (Date.parse("2023-11-16T11:13:00.000Z")) {
        timeAgo = formatDistanceToNow(new Date("2023-11-16T11:13:00.000Z"), { addSuffix: true });
    }

    return (
        <div className='projects-container'>
        <Link to="/" className="back-button">
            &laquo;
        </Link>
        <div className="projects-info">
            <p className="time-ago">⏲️ {timeAgo}</p>
        </div>
        <h2>Life Expectancy</h2>
        <p className='project-description'>Please view my life expectancy Exploratory Data Analysis Project below. Jupyter Notebook and Python were used to create this analysis. I have been very descriptive in each step of the analysis to show the thought process and why decisions were made.</p>
        <h3>Languages</h3>
        <p>Python: pandas, numpy, matplotlib (pyplot), seaborn, scipy (stats, winsorize), sklearn (PCA, scale), os</p>
        <iframe
                className='jupyter-project'
                title="Jupyter Notebook"
                width="100%"
                height="600px"
                src="https://nbviewer.org/github/milbot1992/dataanalytics/blob/main/LifeExpectancy/Life_Expectancy_Analysis.ipynb"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}
