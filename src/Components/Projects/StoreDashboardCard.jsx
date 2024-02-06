import StoreDB from '../../assets/DB.png'

export default function StoreDashboardCard () {
    
    return (
        <section className="project-card">
        <img
        src={StoreDB}
        alt={`a screenshot of an interactive dashboard showing global supermarket data`}
        />
        <div className="project-card-content">
        <h2>Interactive Dashboard: Global Supermarket Metrics</h2>
        <h4 className='project-card-desc'>Interactive dashboard created using Tableau to show key metrics</h4>
        <br></br>
        </div>
    </section>
    );
}