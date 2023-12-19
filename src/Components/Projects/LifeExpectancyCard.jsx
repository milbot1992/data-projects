import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import LEGraph from '../../assets/LEgraph.png'

export default function LifeExpectancyCard () {
    const timeAgo = formatDistanceToNow(new Date("2023-01-16T11:13:00.000Z"), { addSuffix: true });
    
    return (
        <section className="project-card">
        <img
        src={LEGraph}
        alt={`a photo to depict data and life expectancy`}
        />
        <div className="project-card-content">
        <h2>Data Analysis: Life Expectancy</h2>
        <h4 className='project-card-desc'>An Exploratory Data Analysis project investigating Life Expectancy</h4>
        <p>⏲️{timeAgo}</p><br></br><br></br><br></br>
        </div>
    </section>
    );
}