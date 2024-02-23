import LEGraph from '../../assets/legraph.png'

export default function LifeExpectancyCard () {
    
    return (
        <section className="project-card">
        <img
        src={LEGraph}
        alt={`a photo to depict data and life expectancy`}
        />
        <div className="project-card-content">
        <h2>Data Analysis: Life Expectancy</h2>
        <h4 className='project-card-desc'>An Exploratory Data Analysis project investigating Life Expectancy</h4>
        <br></br>
        </div>
    </section>
    );
}