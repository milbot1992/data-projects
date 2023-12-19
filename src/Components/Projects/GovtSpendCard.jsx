import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import GovtSpend from '../../assets/govtspend.png'

export default function GovtSpendCard () {
    const timeAgo = formatDistanceToNow(new Date("2023-12-01T11:13:00.000Z"), { addSuffix: true });
    
    return (
        <section className="project-card">
        <img
        src={GovtSpend}
        alt={`a photo of a data vosualisation showing different levels of circles that represent government spending`}
        />
        <div className="project-card-content">
        <h2>Data Visualisation: Government Spending</h2>
        <h4 className='project-card-desc'>An Interactive zoomable data visualistion circle chart created using d3.js to visualise Government spending in 2022/23</h4>
        <p>⏲️{timeAgo}</p><br></br><br></br><br></br>
        </div>
    </section>
    );
}