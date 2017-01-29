"use strict"

/*
*    Imports
*/
import { homeTemplate } from '../templates/home'

import Base from '../components/base'

import PersonOfInterest from '../components/PersonOfInterest'

import Modal from '../components/Modal'

/*
*    Helpers
*/
import { insertEnd, selectFirst, selectById } from '../utils/Helper'

/*
*    @class
*    @extend Base
*    @description - Component for the home
*/

class Home extends Base {
	
	/*
	*     @constructor
	*     @param { DOMELEMENT } container - container to append the Home to
	*     @param { object } props
	*/
	constructor(container, props){
		/*
		*    Pass constructor arguments to the parent
		*/
		super(container, props)

		/*
		*    @private
		*    @type { array }
		*    @description - holds all profile components
		*/
		this._profiles = []

		/*
		*    @private 
		*    @type { null }
		*/
		this._modal = null

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

		this._renderProfiles()

	}

	/*
	*    @function 
	*    @private
	*    @return {void}
	*/
	_renderProfiles(){

		/*
		*    @private
		*    @type { DOMElement }
		*/
		const poiListContainer = selectFirst(".poi-list", selectById("home"))

		/*
		*     Loop around all the persons models
		*     Create a person of interest component 
		*     With basic details
		*/
		this.profiles = this.props.persons.map( ( person, index ) => {
			
			/*
			*     @private
			*     @type { string, string, string }
			*/
			let { name, number, image } = person

			/*
			*    Return a person of interest component
			*/
			return new PersonOfInterest(poiListContainer, {
				name,
				number,
				image,
				key : index,
				onClick : (key) => { this._handleProfileClick(key) }
			})
		
		})
	}

	/*
	*    @function
	*    @private
	*    @param { string } key
	*    @return { void }
	*/
	_handleProfileClick(key){

		this._createModal(key)

	}

	/*
	*    @function
	*    @private
	*    @return { void }
	*/

	_createModal(key = ""){

		/*
		*    If key is invalid then return out
		*/
		if(key === "" || !this.props.persons[key] ) 
			return

		/*
		*    @private
		*    @type { person }
		*/
		let person = this.props.persons[key]
		
		/*
		*     @private
		*     @type { string, string, string }
		*/
		let { name, number, image } = person
		
		/*
		*    @private
		*    @type { array | string }
		*/
		let logs = this.props.MI5.log(person)

		/*
		*    Keep a reference to the modal
		*/
		this._modal = new Modal(this.container, {
			name,
			number,
			image,
			logs,
			key : 0,
			onClick : () => { this._destroyModal() }
		})

	}

	/*
	*    @function
	*    @private
	*    @return { void } 
	*/
	_destroyModal(){

		this._modal.destroy()
		
		this._modal = null
	}

	/*
	*    @function
	*    @private
	*    @return { void } 
	*/
	_render(){
		insertEnd(this.container, homeTemplate(this.props))
	}

}

export default Home