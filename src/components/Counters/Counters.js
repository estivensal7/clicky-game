//Importing components
import React from 'react';
import './Counters.css';

//Counter receives two props to display
const Counters = props => (
	<div className='counters'>
		<h1>Current Score: {props.current} | High Score: {props.highScore}</h1>
	</div>
)

//exporting function as default
export default Counters;