import YogaSite from '../../assets/YogaSite.png'

export default function GraceYogaCard () {
    
    return (
        <section className="project-card">
        <img
        src={YogaSite}
        alt={`an illustration depicting a yoga insrtuctor holding a pose`}
        />
        <div className="project-card-content">
        <h2>Web Development: Yoga Classes Site</h2>
        <h4 className='project-card-desc'>Website to display weekly yoga classes for a local yoga instructor</h4>
        <br></br>
        </div>
    </section>
    );
}