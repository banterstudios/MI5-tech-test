"use strict"

/*
*    @name home
*    @function
*    @return {string} - string representing the home view
*/
export const homeTemplate = () => { 
	return (
		`<section id="home">
			<div class="wrapper">
				<div class="row">
					<div class="column-10 offset-left-1 offset-right-1">
						<div class="title">
							<h1>People of interest</h1>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="column-10 offset-left-1 offset-right-1 poi-list ">
						<!-- Persons of interest -->
					</div>
				</div>
			</div>
		</section>`
	)
}