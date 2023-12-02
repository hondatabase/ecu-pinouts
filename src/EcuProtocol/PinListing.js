import React, { useState } from 'react';
import PinCard from './PinCard';

const PinListing = ({ protocol, pinsData, onBack }) => {
	
	const [searchTerm, setSearchTerm] = useState('');

	if (!pinsData) return <div>Loading...</div>;

	// Flatten the pin data and include connector letter
	const allPins = [];
	Object.entries(pinsData).forEach(([connector, pins]) => pins.all.forEach(pin => allPins.push({ ...pin, connector: connector.split('_')[1] })));

	const filteredPins = allPins.filter(pin => 
		!searchTerm || 
		(pin.description && pin.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
		(pin.number && pin.number.toString().includes(searchTerm)) ||
		(pin.wire_color && (
			Array.isArray(pin.wire_color) ? 
			pin.wire_color.some(color => color.toLowerCase().includes(searchTerm.toLowerCase())) : 
			pin.wire_color.toLowerCase().includes(searchTerm.toLowerCase())
		)) ||
		(pin.specific_models && pin.specific_models.some(model => model.toLowerCase().includes(searchTerm.toLowerCase()))) ||
		(`${pin.connector}${pin.number}`.toLowerCase().includes(searchTerm.replace(/\s/g, '').toLowerCase())) ||
		(`${pin.connector} ${pin.number}`.toLowerCase().includes(searchTerm.toLowerCase()))
	);
	
	return (
		<div className="contentWrapper">
			<button onClick={onBack}>Back</button>
			<input type="text" placeholder="Search Pins" onChange={e => setSearchTerm(e.target.value)} />
			<div id="pinsContainer">
				{filteredPins.map((pin, index) => <PinCard key={index} pinData={pin} />)}
			</div>
		</div>
	);
};

export default PinListing;
