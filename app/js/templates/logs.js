"use strict"

/*
*    @name logs
*    @function
*    @return {string} - string representing the logs view
*/
export const logsTemplate = props => { 
	
	let { key, log } = props

	return (
		`<li class="log" key="${key}">
			<p>// ${log}</p>
		</li>`
	)
}