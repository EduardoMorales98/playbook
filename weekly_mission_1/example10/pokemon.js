/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

export default class Pokemon{
    constructor (name) {
      this.name = name
    }
  
    sayHello (message) {
      console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }

    sayMessage (message) {
        console.log(`Mi pokemon ${this.name} dice: Heyy!`)
      }
}