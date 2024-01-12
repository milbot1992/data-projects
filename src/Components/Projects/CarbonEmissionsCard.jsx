import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import CarbonEmissions from '../../assets/CarbonEmissions.png'

export default function CarbonEmissionsCard () {
    const timeAgo = formatDistanceToNow(new Date("2024-01-09T08:13:00.000Z"), { addSuffix: true });
    
    return (
        <section className="project-card">
        <img
        src={CarbonEmissions}
        alt={`an illustration depicting carbon emissions from factories, cars and cows`}
        />
        <div className="project-card-content">
        <h2>Data Visualisation: Carbon Emissions</h2>
        <h4 className='project-card-desc'>Carbon Emissions visualised by country each year since 1970.</h4>
        <p>⏲️ {timeAgo}</p><br></br><br></br><br></br>
        </div>
    </section>
    );
}