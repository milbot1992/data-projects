import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import MeteorMap from '../../assets/Meteor.png'

export default function MeteorMapCard () {
    const timeAgo = formatDistanceToNow(new Date("2023-11-19T11:13:00.000Z"), { addSuffix: true });
    
    return (
        <section className="project-card">
        <img
        src={MeteorMap}
        alt={`a photo of a world map showing meteor landings`}
        />
        <div className="project-card-content">
        <h2>Data Visualisation: Meteor Landings</h2>
        <h4 className='project-card-desc'>Using API meteor landing data to create a visual map</h4>
        <p>⏲️{timeAgo}</p><br></br><br></br><br></br>
        </div>
    </section>
    );
}