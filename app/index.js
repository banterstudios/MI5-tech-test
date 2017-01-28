"use strict"

/*
*    Import styles
*/
import styles from './styles/index.less'

/*
*    Import the MI5 class
*/
import MI5 from './js/models/MI5'

/*
*    Import the Player class
*/
import Person from './js/models/Person'

window.person = new Person("Gary")

window.person2 = new Person("Sam")

window.person3 = new Person("john")

window.mi5 = new MI5()
