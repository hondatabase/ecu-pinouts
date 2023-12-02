import React from 'react';

const PinCard = ({ pinData }) => {
    // Your existing generateGradient function
    const generateGradient = (colors) => {
        if (!colors) return 'transparent'; // Fallback for no color

		const colorMap = {
			"light blue": "#ADD8E6", // Hex code for light blue
			"light green": "#90EE90", // Hex code for light green
			// Add more mappings as needed
		};

        const colorArray = Array.isArray(colors) ? colors : colors.split('/').map(color => color.trim());
        const gradientParts = colorArray.map((color, index, array) => {
			const validColor = colorMap[color.toLowerCase()] || color; // Map to a valid color or use the original
            const percentage = (index / array.length) * 100;
            return `${validColor} ${percentage}%, ${validColor} ${percentage + (100 / array.length)}%`;
        });

        return `linear-gradient(-45deg, ${gradientParts.join(', ')})`;
    };

    // Determine the wire color text
    const wireColorText = Array.isArray(pinData.wire_color) ? pinData.wire_color.join(', ') : pinData.wire_color;

    return (
        <div className="pinCard">
            <div>{pinData.connector.toUpperCase()}{pinData.number}</div>
            <div>{pinData.description}</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {pinData.wire_color && Array.isArray(pinData.wire_color) ? (
                    pinData.wire_color.map((color, index) => (
                        <div key={index} className="color" style={{ background: generateGradient(color) }}></div>
                    ))
                ) : (
                    <div className="color" style={{ background: generateGradient(pinData.wire_color) }}></div>
                )}
                <span>{wireColorText}</span>
            </div>
            {pinData.specific_models && <div>Specific Models: {pinData.specific_models.join(', ')}</div>}
        </div>
    );
};

export default PinCard;
