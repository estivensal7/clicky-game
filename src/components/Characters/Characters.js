//Importing components
import React from "react";
import './Characters.css';

//passing id property as argument to onClick function in the image element
const Characters = props => (
	<img src={props.image}
		alt={props.alt}
		className="img-thumbnail"
		onClick={() => props.handleIncrement(props.id)} />
)

//exporting function
export default Characters;