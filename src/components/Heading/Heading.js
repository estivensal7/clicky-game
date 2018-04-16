//importing components
import React from 'react';
import './Heading.css';

//creating heading that will be modified with css 
const Heading = props => <h1 className='heading'>{props.children}</h1>

//exporting function
export default Heading;