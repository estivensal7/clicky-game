//importing components
import React from 'react';
import './Main.css';

//creating the main page layout 
const Main = props => (
	<div className='container'>
		<div className='row'>
			<div className='col'>{props.children}</div>
		</div>
	</div>
);

//exporting function
export default Main;