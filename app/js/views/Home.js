"use strict"

/*
*    Imports
*/
import { homeTemplate } from '../templates/home'

import Base from '../components/base'

import PersonOfInterest from '../components/PersonOfInterest'

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
		this.profiles = this.props.persons.map( person => {
			
			/*
			*     @private
			*     @type { string }
			*/
			let { name, number } = person

			return new PersonOfInterest(poiListContainer, person)
		
		})
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