"use strict"

/*
*    Import styles
*/
import styles from './styles/index.less'

/*
*    Import Helpers
*/
import { ready, selectById } from './js/utils/Helper'

/*
*    Import the App
*/

import App from './js/App'

/*
*    @type { App }
*/
let AppInstance = null

/*
*    Wait for the dom to be ready
*    then initiate the app
*/
ready()
.then( () => {

	/*
	*    Initialise the app
	*/
	AppInstance = new App(selectById("app"))

})
.catch( error => console.log('Error!', error) )