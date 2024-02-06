import MeteorMap from '../../assets/Meteor.png'

export default function MeteorMapCard () {
    
    return (
        <section className="project-card">
        <img
        src={MeteorMap}
        alt={`a photo of a world map showing meteor landings`}
        />
        <div className="project-card-content">
        <h2>Data Visualisation: Meteor Landings</h2>
        <h4 className='project-card-desc'>Using API meteor landing data to create a visual map</h4>
        <br></br>
        </div>
    </section>
    );
}