import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link  } from "react-router-dom";
import '../../../Styling/PortfolioPage.css'
import lightbulbImage from '../../assets/lightbulb.png'

export default function PortfolioPage() {
    let timeAgo = "";
    if (Date.parse("2023-11-16T11:13:00.000Z")) {
        timeAgo = formatDistanceToNow(new Date("2023-11-16T11:13:00.000Z"), { addSuffix: true });
    }

    return (
        <div className='portfolio-container'>
        <Link to="/" className="back-button">
            &laquo;
        </Link>
        <div className="portfolio-info">
            <p className="time-ago">&nbsp;</p>
        </div>
        <h2 className='portfolio-header'>Data Projects by Millie Ellis</h2>
        <img
            className="portfolio-image"
            src={lightbulbImage}
            alt={`a photo of somebody holding a lightbulb to depict lightbulb moments`}
            id="medium-image"
        />
        <p className="portfolio-article-body">I set up this website to display various data projects that I have worked on in a way that is visually pleasing and easy to navigate.</p>
        <p className="portfolio-article-body">This website showcases a broad range of my skills:</p>
        <h2 className="portfolio-article-subhead">Data</h2>
        <p className="portfolio-article-body">Data Manipulation, Exploratory Data Analysis, Data Visualisation, Machine Learning</p>
        <h2 className="portfolio-article-subhead">Languages</h2>
        <p className="portfolio-article-body">Python , SQL, Javascript using Node.js, React, html, CSS</p>
        <h2 className="portfolio-article-subhead">Web Development</h2>
        <p className="portfolio-article-body">I used React & CSS to create a great user experience navigating around the site</p>
        <h2 className="portfolio-article-subhead">Deployment</h2>
        <p className="portfolio-article-body">Hosting: I used Netlify to host my site</p>
        <h2 className="portfolio-article-subhead">Code Organization</h2>
        <p className="portfolio-article-body">The code is organized into components, making it modular and readable</p>
        </div>
    );
}
