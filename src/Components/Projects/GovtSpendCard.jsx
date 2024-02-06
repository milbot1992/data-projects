import GovtSpend from '../../assets/govtspend.png'

export default function GovtSpendCard () {
    
    return (
        <section className="project-card">
        <img
        src={GovtSpend}
        alt={`a photo of a data vosualisation showing different levels of circles that represent government spending`}
        />
        <div className="project-card-content">
        <h2>Data Visualisation: Government Spending</h2>
        <h4 className='project-card-desc'>An interactive zoomable circle chart created using d3.js to visualise annual Government spending</h4>
        <br></br>
        </div>
    </section>
    );
}