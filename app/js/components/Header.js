"use strict"

/*
*    Imports
*/
import { headerTemplate } from '../templates/header'

import Base from './base'

/*
*    @class
*    @extend Base
*    @description - Component for the header
*/

class Header extends Base {
	
	/*
	*     @constructor
	*     @param { DOMELEMENT } container - container to append the header to
	*     @param { object } props
	*/
	constructor(container, props){
		/*
		*    Pass constructor arguments to the parent
		*/
		super(container, props)
	}

	/*
	*    @function
	*    @return { string } 
	*/
	render(){
		return headerTemplate(this.props)
	}

}

export default Header