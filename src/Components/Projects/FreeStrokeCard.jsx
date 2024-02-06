import MobileView from '../../assets/FreeStroke.png'

export default function FreeStrokeCard () {
    
    return (
        <section className="project-card">
        <img
        src={MobileView}
        alt={`a screenshot of the mobile application showing a map page`}
        />
        <div className="project-card-content">
        <h2>App Development: Outdoor Swimming Locations Finder</h2>
        <h4 className='project-card-desc'>A React Native mobile app created to help users find safe swim spots</h4>
        <br></br>
        </div>
    </section>
    );
}