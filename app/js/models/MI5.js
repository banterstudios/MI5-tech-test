"use strict"

/*
*    Imports
*/
import { isObject } from '../utils/Helper'

import Event from '../utils/Event'

import { ADD_LOG } from '../utils/EventTypes'

/*
*    @class
*    @description - log details from suspects
*/
class MI5 {
	
	/*
	*    @constructor
	*/
	constructor(){

		/*
		*    @private
		*    @type {string}
		*/
		this._noEntriesOutput = `No Entries`

		/*
		*    @private
		*    @type {map}
		*/
		this._logs = new Map()

		/*
		*    Invoke bind events
		*/
		this._bindEvents()
	}

	/*
	*    @function
	*    @private
	*    @return {void}
	*    @event {ADD_LOG} - listens for an event
	*/
	_bindEvents(){

		/*
		*    Listen to the 'ADD_LOG' event and store the data.
		*/
		Event.attach(ADD_LOG, (data) => this._storeLog(data))
	}

	/*
	*    @function
	*    @private
	*    @return {void}
	*/
	_storeLog(data){

		/*
		*    get the caller value from the data passed in
		*/
		let { caller } = data

		/*
		*    Perform a check to see if this logs caller name already exists
		*    if not then create a new map key and with an empty array value
		*/

		this._logs.has(caller) || this._logs.set(caller, [])
    	this._logs.get(caller).push(data)

	}

	/*
	*    @function
	*    @param {object} log
	*    @return {string}
	*/
	_generateLog(log){
		
		/*
		*    If the log type is 'CALL' then output called else it's a text.
		*/
		let _type = log.type === 'CALL' ? 'called' : 'texted'

		return `${log.caller} ${_type} ${log.callee} from ${log.phoneOwner}'s phone (${log.phoneNumber})`
	}

	/*
	*    @function
	*    @param {Person} person - Person object
	*	 @return {array|string}
	*/

	/*
		[CALLER] called/texted [CALLEE] from [PHONE OWNER]'s phone ([PHONE NUMBER])
	*/
	log(person){

		/*
		*    Check that the person passed in, is infact an object
		*/
		if(!isObject(person)){
			throw new Error('person is not an object.')
			return false
		}

		/*
	    *    Get the name value from person
		*/
		let { name } = person

		/*
		*    Check to see if the person has logs already
		*    if not return no entries found 
		*/
		if(!this._logs.has(name) || !this._logs.get(name).length){
			return this._noEntriesOutput
		}
		
		/*
		*    Return the logs on that person
		*/
		return this._logs.get(name).map(log => this._generateLog(log))

	}

}

export default MI5