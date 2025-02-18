import React from 'react';
import WireColor from './WireColor';

const PinCard = ({ pinData }) => {
    return (
        <div className="pinCard">
            <div><strong>{pinData.connector.toUpperCase()}{pinData.number}</strong></div>
            <div>{pinData.description}</div>
            <div className="colorContainer"><WireColor colors={pinData.wire_color} /></div>
            {pinData.specific_models && <div>Specific Models: {pinData.specific_models.join(', ')}</div>}
        </div>
    );
};

export default PinCard;
