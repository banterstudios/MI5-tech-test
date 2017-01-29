"use strict"

/*
*    Import the MI5 class
*/
import MI5 from './models/MI5'

/*
*    Import the Player class
*/
import Person from './models/Person'

/*
*    Import the home view
*/
import Home from './views/Home'

/*
*    import the header Component
*/
import Header from './components/Header'

/*
*    @name App
*    @description - Entry point for the whole application
*/
class App {
	/*
	*    @constuctor
	*    @param { DOMElement } container - container to attach the view too
	*/
	constructor(container){

		/*
		*    @type { MI5 }
		*/
		this.mi5Model = window.MI5 = new MI5()

		/*
		*    Create 4 person models
		*    @type { Person }
		*/

		this.johnModel = new Person("John", "07578668987", "Alex_lambert.png")
		this.amyModel  = new Person("Amy",  "07654556545", "Anthony_miles.png")
		this.nickModel = new Person("Nick", "07465336263", "Dan_winters.png")
		this.alexModel = new Person("Alex", "07646556234", "Erin_davis.png")

		/*
		*    @type { Header }
		*/
		this.header = new Header(container)
		
		/*
		*    @type { Home }
		*/
		this.home = new Home(container, { 
			
			MI5     : this.mi5Model,
			persons : [
				this.johnModel,
				this.amyModel,
				this.nickModel,
				this.alexModel
			]

		})
		
		/*
		*    Set up some fake texts and calls
		*/

		/*
		*    Fake calls
		*/
		this._fakeCall(this.johnModel, {
			owner  : this.nickModel,
			number : "07678990909" 
		}, this.amyModel)

		this._fakeCall(this.alexModel, {
			owner  : this.amyModel,
			number : "09898998989" 
		}, this.johnModel)

		/*
		*     Fake texts
		*/
		this._fakeText(this.amyModel, {
			owner  : this.amyModel,
			number : "09898998989" 
		}, this.johnModel, this.amyModel)


	}

	/*
	*    @function
	*    @private
	*    @return {void}
	*    var phone = {owner: person3, number: "07874438205"}; 
	*    person.call(phone, person2);
	*/
	_fakeCall(person, phone, callee){

		person.call(phone, callee)		

	}

	/*
	*    @function
	*    @private
	*    @return {void}
	*	 var phone = {owner: person2, number: "07874438205"}; 
	*	person3.text(phone, person2,person,person3);
	*/
	_fakeText(person, phone, ...textees){

		person.text(phone, [...textees])

	}

}

export default App