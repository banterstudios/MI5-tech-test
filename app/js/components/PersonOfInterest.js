"use strict"

/*
*    Imports
*/
import { poiTemplate } from '../templates/personofinterest'

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

class PersonOfInterest extends Base {
	
	/*
	*     @constructor
	*     @param { DOMELEMENT } container - container to append the PersonOfInterest to
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
		insertEnd(this.container, poiTemplate(this.props))
	}

}

export default PersonOfInterest