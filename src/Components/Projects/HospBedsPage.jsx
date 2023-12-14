import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'

export default function HospBedsPage() {
    let timeAgo = "";
    if (Date.parse("2022-11-16T11:13:00.000Z")) {
        timeAgo = formatDistanceToNow(new Date("2022-11-16T11:13:00.000Z"), { addSuffix: true });
    }

    return (
        <div className='projects-container'>
        <Link to="/" className="back-button">
            &laquo;
        </Link>
        <div className="projects-info">
            <p className="time-ago">⏲️ {timeAgo}</p>
        </div>
        <h2>Hospital Beds</h2>
        <p className='project-description'>Analysis and interactive visualisation using Jupyter Notebook and Python to show how the number of hospital beds in England has changed over time.</p>
        <h3>Languages</h3>
        <p>Python: pandas, plotly</p>
        <iframe
                className='jupyter-project'
                title="Jupyter Notebook"
                width="100%"
                height="600px"
                src="https://nbviewer.org/github/milbot1992/dataanalytics/blob/main/HospitalBeds/Hospital_beds_time_series.ipynb"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}
