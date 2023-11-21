import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../../../../Styling/ProjectPages.css'

const MeteorTimeline = ({ meteorList }) => {
    const [timelineData, setTimelineData] = useState({});
    const [chartKey, setChartKey] = useState(0);

    useEffect(() => {
        const years = meteorList.map((meteor) => {
            const year = new Date(meteor.year).getFullYear().toString();
            return year;
        }).filter(Boolean);

        const counts = years.reduce((acc, year) => {
            acc[year] = (acc[year] || 0) + 1;
            return acc;
        }, {});

        const data = {
            labels: Object.keys(counts),
            datasets: [
                {
                    label: 'Meteor Landings per Year',
                    data: Object.values(counts),
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 1,
                },
            ],
        };

        setTimelineData(data);
    }, [meteorList]);

    const resetCanvas = () => {
        setChartKey((prevKey) => prevKey + 1);
    };

    return (
        <div className="bar-chart">
            <h3>Meteor Landings Timeline</h3>
            {Object.keys(timelineData).length > 0 ? (
                <Bar className='bar-chart' key={chartKey} data={timelineData} />
            ) : (
                <p>No data available for the timeline.</p>
            )}
        </div>
    );
};

export default MeteorTimeline;
