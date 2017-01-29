"use strict"

/*
*    Imports
*/
import { modalTemplate } from '../templates/modal'

import Base from './base'

import PersonOfInterest from '../components/PersonOfInterest'

import Log from '../components/Log'

/*
*    Helpers
*/
import { insertEnd, selectFirst, removeChild } from '../utils/Helper'

/*
*    @class
*    @extend Base
*    @description - Component for the Modal
*/

class Modal extends Base {
	
	/*
	*     @constructor
	*     @param { DOMELEMENT } container - container to append the Modal to
	*     @param { object } props
	*/
	constructor(container, props){
		/*
		*    Pass constructor arguments to the parent
		*/
		super(container, props)

		/*
		*    @private
		*    @type { null }
		*    @description - holds a suspect profile 
		*/
		this._profile = null

		/*
		*    @private
		*    @type { array }
		*/
		this._logs = []

		/*
		*    For adding and removing events
		*/
		this.onClose = this.onClose.bind(this)

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

		this._renderProfile()

		this._renderLogs()

		this._bindEvents()

	}

	/*
	*    @function
	*    @return { void }
	*    @private
	*/
	_renderProfile(){

		/*
		*    @private
		*    @type { DOMElement }
		*/
		const _poiContainer = selectFirst(".poi", selectFirst(".modal-suspect", this.container))

		/*
		*     @private
		*     @type { string, string, string, int }
		*/
		let { name, number, image, key } = this.props

		this._profile = new PersonOfInterest(_poiContainer, {
			name,
			number,
			image,
			key
		})
	}

	/*
	*    @function
	*    @return { void }
	*    @private
	*/
	_renderLogs(){

		/*
		*    @private
		*    @type { DOMElement }
		*/
		const _logsContainer = selectFirst(".log-list", selectFirst(".modal-suspect", this.container))

		/*
		*     @private
		*     @type { string | array }
		*/
		let { logs } = this.props

		/*
		*    Type check to see if logs is a string or an array
		*/
		if(typeof logs === 'string'){

			this._logs.push( new Log(_logsContainer, {
				log : logs,
				key : 0
			}))

		}else{

			this._logs = logs.map( (log, index ) => {

				return new Log(_logsContainer, {
					log,
					key : index
				})

			})

		}

	}

	/*
	*    @function
	*    @private
	*    @event
	*    @return { void }
	*/
	_bindEvents(){

		/*
		*    Find the close button in the DOM
		*    Add a click event
		*/
		selectFirst(".modal-suspect .close")
		.addEventListener("click", this.onClose, false)

		/*
		*    Find the overlay in the DOM
		*    Add a click event
		*/
		selectFirst(".modal-suspect .overlay")
		.addEventListener("click", this.onClose, false)

	}

	/*
	*    @function
	*    @private
	*    @return { void }
	*/
	onClose(){

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

		/*
		*    Remove close event listener
		*/
		selectFirst(".modal-suspect .close")
		.removeEventListener("click", this.onClose , false)

		/*
		*    Remove close event listener
		*/
		selectFirst(".modal-suspect .overlay")
		.removeEventListener("click", this.onClose , false)

		/*
		*    Remove all children
		*/

		if(this._profile){

			this._profile.destroy()

			this._profile = null;

		}

		if(this._logs){

			for(var i = 0, len = this._logs.length; i < len; i ++ ){
				
				this._logs[i].destroy()
			
			}

			this._logs.length = 0

		}

		/*
		*    Remove from DOM
		*/
		removeChild(this.container, selectFirst(".modal-suspect", this.container))

		return true

	}

	/*
	*    @function
	*    @private
	*    @return { void } 
	*/
	_render(){
		insertEnd(this.container, modalTemplate(this.props))
	}

}

export default Modal