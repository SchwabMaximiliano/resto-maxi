import React from 'react';
import PropTypes from 'prop-types';

export const ContainerReserva = ({ title, children }) => {
	return (
		<div className='page-carousel-container'>
			<div>
				<h1>{title}</h1>
			</div>
			<div>{children}</div>
		</div>
	);
};

ContainerReserva.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any,
};
