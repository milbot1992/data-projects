import { useState } from "react";

function MeteorCard({ meteor }) {
    const [meteorName, setMeteorName] = useState(meteor.name);

    return (
        <div className = 'meteor-card'>
        <h3>{meteorName}</h3>
        <h4>Information</h4>
        <p>Year: {String(meteor.year).substring(0, 4)}</p>
        </div>
    );
}

export default MeteorCard;
