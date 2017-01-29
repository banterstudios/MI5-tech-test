"use strict"

/*
*    Imports
*/
import { poiTemplate } from '../templates/personofinterest'

import Base from './base'

/*
*    Helpers
*/
import { insertEnd, selectFirst, removeChild } from '../utils/Helper'

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
		*    For adding and removing events
		*/
		this.onProfileClick = this.onProfileClick.bind(this)
		
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
		this._bindEvents()

	}

	/*
	*    @function
	*    @private
	*    @event
	*    @return { void }
	*/
	_bindEvents(){

		/*
		*    Find the person of interest in the DOM
		*    Add a click event
		*/
		selectFirst(`.person-of-interest[key="${this.props.key}"]`)
		.addEventListener("click", this.onProfileClick, false)

	}

	/*
	*    @function
	*    @private
	*    @return { void }
	*/
	onProfileClick(){

		/*
		*    If props contains a onClick callback
		*    Invoke it with the key passed in by props
		*/
		if(typeof this.props.onClick === 'function')
			this.props.onClick(this.props.key)

	}


	/*
	*    @function
	*    @return { boolean }
	*/
	destroy(){
		
		selectFirst(`.person-of-interest[key="${this.props.key}"]`)
		.removeEventListener("click", this.onProfileClick, false)

		/*
		*    Remove from DOM
		*/
		removeChild(this.container, selectFirst(`.person-of-interest[key="${this.props.key}"]`, this.container))

		return true
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