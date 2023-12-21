import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'
import React, { useEffect } from 'react';
import Timeseries from '../../assets/Corr.png'
import Matrix from '../../assets/Matrix.png'
import Relationship1 from '../../assets/Relationship1.png'
import Relationship2 from '../../assets/Relationship2.png'
import LEboxplot from '../../assets/LE-boxplot.png'

export default function PortfolioPage() {
    let timeAgo = "";
    if (Date.parse("2023-01-16T11:13:00.000Z")) {
        timeAgo = formatDistanceToNow(new Date("2023-01-16T11:13:00.000Z"), { addSuffix: true });
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='projects-page'>
        <Link to="/" className="back-button">
            &laquo;
        </Link>
        <div className="projects-info">
            <p className="time-ago">⏲️ {timeAgo}</p>
        </div>
        <h2>Life Expectancy</h2>
        <p className='project-description'>The objective of this analysis was to obtain a better understanding of the trends and changes in life expectancy over time, as well as to explore the factors that may be associated with variations in life expectancy. By examining important correlations, we can gain a better understanding of the underlying factors that influence changes in life expectancy over time.</p>
        <h3>Key Steps</h3>
        <h4>1. Data Cleaning</h4>
        <h5>1.1 Dataset / Variable descriptions</h5>
        <p>To gain insight into the meaning of the variables and what type of variable each is, i.e., nominal, ordinal, interval, or ratio?</p>
        <h5>1.2 Missing values</h5>
        <p>It was found that nearly half of the BMI variable's values were null therefore this variable was removed.</p>
        <p>There were several other columns with missing values - impututing the missing values with the mean for each year was performed to fill in the missing values while preserving the general trend of the data.</p>
        <h5>1.3 Outliers</h5>
        <p>Boxplots and histograms were utilised to visually see outliers. By visual inspection, it was evident that there existed several outliers for all the variables, including the target variable of life expectancy. The application of Tukey's method was used to confirm this statistically - anything beyond 1.5 times the Interquartile Range (IQR) was considered an outlier.</p>
        <img
        src={LEboxplot}
        className='LE-img'
        alt={`a photo of boxplots and histograms`}
        />
        <p>Winsorisations was used restrict the values for each variable until all outliers are eliminated. This technique was used to as small extent as possible in order to keep as much data in tact as possible while still being able to eliminate the outliers.</p>
        <p></p>
        <h4>2. Data Exploration</h4>
        <h5>2.1 Life Expectancy over time</h5>
        <p>Seaborn chart used to gain insight into a positive trend over time with life expectancy increasing gradually year on year.</p>
        <img
        src={Timeseries}
        className='LE-img'
        alt={`a photo of a timeseries plot showing life expectancy increasing over time`}
        />
        <h5>2.2 Continuous Variable Correlation</h5>
        <p>Correlation matrix used to gain insight into important correlations. </p>
        <img
        src={Matrix}
        className='LE-img'
        alt={`a photo of a correlation matrix`}
        />
        <p>Life Expectancy - target variable -  appears to be relatively highly correlated with:</p>
        <ul>
            <li>Adult Mortality: Negative</li>
            <li>HIV/AIDS: Negative</li>
            <li>Income Composition of Resources: Positive</li>
            <li>Schooling: Positive</li>
        </ul>
        <h5>2.4 Correlation Scatterplots</h5>
        <p>To view correlation between variables.</p>
        <h5>Life Expectancy and Years of Schooling</h5>
        <img
        src={Relationship1}
        className='LE-img'
        alt={`a photo of a scatter plot for life expectancy and schooling`}
        />
        <p>The evidence shows a clear positive correlation between the number of years of education and the average life expectancy, particularly in developing countries. Furthermore, developed countries exhibit notably higher levels of both education and life expectancy in comparison to developing countries.</p>
        <h5>Life Expectancy and GDP</h5>
        <img
        src={Relationship2}
        className='LE-img'
        alt={`a photo of a scatter plot for life expectancy and GDP`}
        />
        <p>There is a positive correlation between life expectancy and GDP for developing countries. Interestingly, the same correlation is not seen between life expectancy and GDP in developed countries - for these countries the correlation is fairly flat.</p>
        <br></br>
        <h3>Languages</h3>
        <p>Python: pandas, numpy, matplotlib (pyplot), seaborn, scipy (stats, winsorize), sklearn (PCA, scale), os</p>
        <br></br>
        <p>You can view the complete Jupyter Notebook below showing the full analysis.</p>
        <iframe
                className='jupyter-project'
                title="Jupyter Notebook"
                width="100%"
                height="500px"
                src="https://nbviewer.org/github/milbot1992/dataanalytics/blob/main/LifeExpectancy/Life_Expectancy_Analysis.ipynb"
                frameBorder="0"
                allowFullScreen
            />
            <br></br><br></br><br></br>
        </div>
    );
}
