"use strict"

/*
*    @name modalTemplate
*    @function
*    @return {string} - string representing the modal view
*/
export const modalTemplate = props => { 
	
	let { key } = props

	return (
		`<section class="modal-suspect" role="dialog" key="${key}">
			<div class="overlay fadein"></div>
			<i class="close"></i>
			<div class="modal shift-fade-up">
				<div class="row poi">
					<!-- POI -->
				</div>
				<div class="row">
					<div class="title">
						<h1>Logged interactions</h1>
					</div>
				</div>
				<div class="row">
					<ul class="log-list">
						<!-- Logs -->
					</ul>
				</div>
			</div>
		</section>`
	)
}