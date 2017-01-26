"use strict"

/*
*    Imports
*/

import Event from '../utils/Event'

import { ADD_LOG } from '../utils/EventTypes'

/*
*    @class
*    @extends Component
*/
class Person {
	
	/*
	*    @constructor
	*    @param {object} props - object of passed in data
	*/
	constructor(name = ""){
		
		/*
		*    @private
		*    @type {string}
		*/
		this._name = name

	}

	/*
	*    @function name
	*    @return {string} name
	*/
	get name(){
		return this._name
	}

	/*
	*    @function 
	*    @param {object} phone
	*    @param {person} person
	*    @type  {string} type
	*    @private
	*/
	_emitLogEvent(type, phone, person){

		let { name } = person

		let { owner, number } = phone

		let caller   = this._name

		Event.notify(ADD_LOG, {
			callee      : name,
			caller      : caller,
			phoneOwner  : owner.name,
			phoneNumber : number,
			type        : type
		})

	}

	/*
	*    @function
	*    @param {object} phone - object representing an owner and a phone number
	*    @param {array} persons - array of person objects
	*	 @return { }
	*    [CALLER] called/texted [CALLEE] from [PHONE OWNER]'s phone ([PHONE NUMBER])
	*/
	text(phone, ...persons){

		/*
		*    Loop around each person
		*    and invoke _emitLogEvent with the log details
		*/
		persons.forEach( person => {
			
			this._emitLogEvent('TEXT', phone, person)

		})

	}

	/*
	*	@function 
	*   @param {object} phone - object representing an owner and a phone number
	*   @param {Person} person - Person object 
	*   @return { }
	*/
	/*
		var alex = new Person("Alex");
		var phone = {owner: dan, number: “07874438205"}; dan.call(phone, alex);
	*/
	call(phone, person){

		/*
		*    Invoke _emitLogEvent with the log details
		*/
		this._emitLogEvent('CALL', phone, person)
	
	}

}

export default Person