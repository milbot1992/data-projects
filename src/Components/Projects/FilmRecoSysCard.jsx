import FilmSysCard from '../../assets/FilmSysCard.png'

export default function FilmRecoSysCard () {
    
    return (
        <section className="project-card">
        <img
        src={FilmSysCard}
        alt={`screenshot of the film recommendation app`}
        />
        <div className="project-card-content">
        <h2>Full-Stack Development: Film Recommendation System</h2>
        <h4 className='project-card-desc'>Film recommendation system using Python (powered by a machine learning algorithm) in the back-end and React in the front-end to provide personalised film recommendations</h4>
        <br></br>
        </div>
    </section>
    );
}