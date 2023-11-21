import { useState } from 'react';
import '../../../../Styling/ProjectPages.css';

function Filters({ setFilterYear, setMeteorList, originalMeteorList}) {
    const [userInput, setUserInput] = useState('');

    const resetFilter = () => {
        setFilterYear('');
        setMeteorList(originalMeteorList);
    };

    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        setFilterYear(userInput);
        setUserInput('')
    }

    return (
        <form className="filter-form" onSubmit={handleSubmit}>
        <label htmlFor="year">Filter by Year:</label>
        <input
            type="text"
            id="year"
            placeholder="Input year of interest here" 
            value={userInput}
            onChange={(event) => {
                const value = event.target.value;
                setUserInput(value);
                }}
            style={{ width: '200px' }}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={resetFilter}>Reset</button>
        </form>
    );
}

export default Filters;
