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
        <h4 className='project-card-desc'>Provides personalised film recommendations. Uses Python (powered by a ML algorithm) in the back-end and React in the front-end.</h4>
        <br></br>
        </div>
    </section>
    );
}