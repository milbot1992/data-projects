import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import HospBeds from '../../assets/HospBeds.png'

export default function HospBedsCard () {
    const timeAgo = formatDistanceToNow(new Date("2022-11-16T11:13:00.000Z"), { addSuffix: true });
    
    return (
        <section className="project-card">
        <img
        src={HospBeds}
        alt={`a photo of a graph showing change in hospital beds over time`}
        />
        <div className="project-card-content">
        <h2>Hospital Beds</h2>
        <h4 className='project-card-desc'>Analysis investigating how the number of hospital beds in England has changed over time</h4>
        <p>⏲️{timeAgo}</p><br></br><br></br><br></br>
        </div>
    </section>
    );
}