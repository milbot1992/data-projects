export const fetchMeteors = async () => {
    try {
        const response = await fetch('https://data.nasa.gov/resource/gh4g-9sfh.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
