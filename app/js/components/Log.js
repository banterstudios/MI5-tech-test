"use strict"

/*
*    Imports
*/
import { logsTemplate } from '../templates/logs'

import Base from './base'

/*
*    Helpers
*/
import { insertEnd, selectFirst, removeChild } from '../utils/Helper'

/*
*    @class
*    @extend Base
*    @description - Component for the Log
*/

class Log extends Base {
	
	/*
	*     @constructor
	*     @param { DOMELEMENT } container - container to append the Log to
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
	*    @return { boolean }
	*/
	destroy(){
	
		/*
		*    Remove from DOM
		*/
		removeChild(this.container, selectFirst(`.log[key="${this.props.key}"]`, this.container))

		return true
	}

	/*
	*    @function
	*    @private
	*    @return { void } 
	*/
	_render(){
		insertEnd(this.container, logsTemplate(this.props))
	}

}

export default Log