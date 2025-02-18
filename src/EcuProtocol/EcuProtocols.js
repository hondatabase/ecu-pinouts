import React, { useState } from 'react';
import pinouts from '../assets/pinouts.json';
import PinListing from './PinListing';

const TooltipMessage = ({ show, message }) => <div className="tooltip-container"><div className={`tooltip-message ${show ? 'show' : ''}`}>{message}</div></div>

const Protocol = ({ protocol, isUnderConstruction, onSelectProtocol }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	const handleClick = () => {
		if (isUnderConstruction) {
			setShowTooltip(true);
			setTimeout(() => setShowTooltip(false), 3000);
		} else {
			onSelectProtocol(protocol);
		}
	};

	const handleTouchStart = () => {
		if (isUnderConstruction)
			setShowTooltip(true);
	};

	const handleTouchEnd = () => {
		if (isUnderConstruction)
			setTimeout(() => setShowTooltip(false), 3000);
	};

	return (
		<>
			<div
				className={`protocol tooltip ${showTooltip ? 'show' : ''}`}
				onClick={handleClick}
				onMouseEnter={() => isUnderConstruction && setShowTooltip(true)}
				onMouseLeave={() => isUnderConstruction && setShowTooltip(false)}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				style={{ cursor: isUnderConstruction ? 'not-allowed' : 'pointer' }}
			>
				{protocol}
			</div>
			{isUnderConstruction && <TooltipMessage show={showTooltip} message={"This protocol is still under development. Please check back later."} />}
		</>
	);
};

const ListProtocols = ({ onSelectProtocol }) =>
	<div id="protocolList">
		{Object.keys(pinouts).map(protocol => {
			return (
				<Protocol
				key={protocol}
				protocol={protocol}
				isUnderConstruction={protocol.toLowerCase() === 'obd0' || protocol.toLowerCase() === 'obd2'}
				onSelectProtocol={onSelectProtocol}
			/>
			);
		})}
	</div>

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
