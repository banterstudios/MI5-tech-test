"use strict"

/*
*    Imports
*/

import Event from '../utils/Event'

import { ADD_LOG } from '../utils/EventTypes'

/*
*    @class
*    @description - dispatch events for when ever a person makes a call / text
*/
class Person {
	
	/*
	*    @constructor
	*    @param {object} props - object of passed in data
	*/
	constructor(name = "", number = "", image = ""){
		
		/*
		*    @private
		*    @type {string}
		*/
		this._name = name

		/*
		*    @private
		*    @type {string}
		*/
		this._number = number

		/*
		*    @private
		*    @type {string}
		*/
		this._image = image		

	}

	/*
	*    @function name
	*    @return {string} name
	*/
	get name(){
		return this._name
	}

	/*
	*    @function name
	*    @return {string} name
	*/
	get number(){
		return this._number
	}

	/*
	*    @function name
	*    @return {string} name
	*/
	get image(){
		return this._image
	}

	/*
	*    @function 
	*    @param {object} phone
	*    @param {person} person
	*    @type  {string} type
	*    @private
	*    @return {void}
	*/
	_emitLogEvent(type, phone, person){

		let { name } = person

		let { owner, number } = phone

		let caller = this._name

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
	*	 @event {text} - Emits a text event
	*    @return {void}
	*/
	text(phone, persons){

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
	*   @event {CALL} - Emits a call event
	*    @return {void}
	*/
	call(phone, person){

		/*
		*    Invoke _emitLogEvent with the log details
		*/
		this._emitLogEvent('CALL', phone, person)
	
	}

}

export default Person