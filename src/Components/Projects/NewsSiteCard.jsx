import NewsSite from '../../assets/news.png'

export default function NewsSiteCard () {
    
    return (
        <section className="project-card">
        <img
        src={NewsSite}
        alt={`a screenshot of a news website with articles`}
        />
        <div className="project-card-content">
        <h2>Web Development: News Site</h2>
        <h4 className='project-card-desc'>RestFUL API and React frontend - website to display news articles by topic, with optimistic rendering.</h4>
        <br></br>
        </div>
    </section>
    );
}