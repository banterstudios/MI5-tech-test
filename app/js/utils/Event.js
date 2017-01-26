"use strict"

/*
*    Very simple event emitter module.
*/

/*
*    @function
*    @return {object}
*    @description - Will store listeners and emit events
*/

const Event = ( () => {

	/*
	*    @type {map}
	*    @private
	*    @summary - Will store listeners.
	*/
	let _listeners = new Map()
	
	/*
	*    @function
	*/
	function attach(label, callback){

		/*
		*    Check whether _listeners already exists,
		*    if not create a new map key with an empty array value
		*    and push the callback from the parameter.
		*/
		_listeners.has(label) || _listeners.set(label, [])
    	_listeners.get(label).push(callback)
	}

	/*
	*    @function
	*    @return {boolean}
	*/
	function notify(label, ...args){

		/*
		*    Get all the listeners who are interested in this event emit. 
		*/
		let listeners = _listeners.get(label)

		/*
		*    Check whether there are any listeners
		*/
	    if ( listeners && listeners.length ) {
	        
	        /*
			*    Loop around each listener and invoke the callback with the passed in arguments
	        */
	        listeners.forEach((listener) => {

	            listener(...args)

	        })

	        return true

	    }

	    return false

	}

	/*
	* return attach and notify as public functions
	*/
	return {
		attach,
		notify
	}

})()

export default Event
