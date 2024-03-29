import CarbonEmissions from '../../assets/CarbonEmissions.png'

export default function CarbonEmissionsCard () {
    
    return (
        <section className="project-card">
        <img
        src={CarbonEmissions}
        alt={`an illustration depicting carbon emissions from factories, cars and cows`}
        />
        <div className="project-card-content">
        <h2>Data Visualisation: Carbon Emissions</h2>
        <h4 className='project-card-desc'>Carbon Emissions visualised by country each year since 1970</h4>
        <br></br>
        </div>
    </section>
    );
}