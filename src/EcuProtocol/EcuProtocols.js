import React, { useState } from 'react';
import pinouts from '../assets/pinouts.json';
import PinListing from './PinListing';

const ListProtocols = ({ onSelectProtocol }) =>
	Object.keys(pinouts).map(protocol =>
		<div key={protocol} style={{ cursor: 'pointer' }} onClick={() => onSelectProtocol(protocol)}>{protocol}</div>)

function EcuProtocolsCards() {
	const [selectedProtocol, setSelectedProtocol] = useState(null);

	return (
		<>{
			selectedProtocol ?
				<PinListing
					protocol={selectedProtocol}
					pinsData={pinouts[selectedProtocol]}
					onBack={() => setSelectedProtocol(null)}
				/>
				: <ListProtocols onSelectProtocol={setSelectedProtocol} />
		}</>
	);
}

export default EcuProtocolsCards;
