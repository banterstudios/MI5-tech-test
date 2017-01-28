"use strict"

/*
*    @function
*    @return {boolean} - returns true or false depending if the passed in argument is an object
*    @param {object} obj
*/
export const isObject = obj => typeof obj == 'object' || false

/*
*    @function
*    @return {promise}
*/
export const ready = () => {
	return new Promise( resolve  => {
	    if (document.readyState != 'loading') {
	        resolve()
	    } else {
	        document.addEventListener('DOMContentLoaded', resolve)
	    }
	})
}

/*
*    @function
*    @return { function }
*    @param { DOMElement } element
*    @param { string } html
*/
export const insertEnd = (element, html = '') => element.insertAdjacentHTML('beforeend', html)

/*
*    @function
*    @return { function | null }
*    @param { string } selector
*    @param { DOMElement } root
*/
export const select = (selector, root = document) => {
    const selection = root.querySelectorAll(selector)

    return selection.length ? selection : null
}

/*
*    @function
*    @return { DOMElement }
*    @param { string } selector
*    @param { DOMElement } root
*/
export const selectFirst = (selector, root = document) => {
    return root.querySelector(selector)
}

/*
*    @function
*    @return { DOMElement }
*    @param { string } id
*/
export const selectById = id => {
    return document.getElementById(id)
}