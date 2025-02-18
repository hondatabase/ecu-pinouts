import React from 'react';

const WireColor = ({ colors }) => {
    const colorMap = {
        "light blue" : "#ADD8E6",
        "light green": "#90EE90",
        "red"        : "#FF0000",
        "blue"       : "#0000FF",
        "orange"     : "#FFA500",
        "yellow"     : "#FFD700",
        "green"      : "#008000",
        "black"      : "#000000",
        "white"      : "#FFFFFF",
        "brown"      : "#8B4513"
    };

    const generateGradient = (color) => {
        if (!color) return 'transparent';
        const colorArray = Array.isArray(color) ? color : color.split('/').map(c => c.trim());
        const validColors = colorArray.map(c => colorMap[c.toLowerCase()] || c);
        return validColors.length > 1 
            ? `linear-gradient(-45deg, ${validColors.map((c, i) => 
                `${c} ${(i * 100) / validColors.length}%, ${c} ${((i + 1) * 100) / validColors.length}%`).join(', ')})`
            : validColors[0];
    };

    return (
        <>
            {Array.isArray(colors) ? (
                colors.map((color, index) => (
                    <div key={index} className="color" style={{ background: generateGradient(color) }} />
                ))
            ) : (
                <div className="color" style={{ background: generateGradient(colors) }} />
            )}
            <span>{Array.isArray(colors) ? colors.join(', ') : colors}</span>
        </>
    );
};

export default WireColor; 