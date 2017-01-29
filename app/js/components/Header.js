"use strict"

/*
*    Imports
*/
import { headerTemplate } from '../templates/header'

import Base from './base'

/*
*    Helpers
*/
import { insertEnd } from '../utils/Helper'

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

		/*
		*    Call init
		*/
		this._init()
	}

	/*
	*     @function
	*     @private
	*     @return { void }
	*/
	_init(){

		this._render()

	}

	/*
	*    @function
	*    @private
	*    @return { void } 
	*/
	_render(){
		insertEnd(this.container, headerTemplate(this.props))
	}

}

export default Header