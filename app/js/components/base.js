"use strict"

/*
*    @class
*    @description - Base component for extending
*/

class Base {
	
	/*
	*     @constructor
	*     @param { DOMELEMENT } container - container to append the header to
	*     @param { object } props
	*/
	constructor(container, props){
		/*
		*    @type { DOMELEMENT }
		*/
		this.container = container

		/*
		*    @type { object }
		*/
		this.props = props
	}

}

export default Base