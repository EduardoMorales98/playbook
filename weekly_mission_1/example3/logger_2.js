<<<<<<< HEAD

/*
  Al exportar una función/objeto así:

  > module.exports.verbose

  Estaremos exportando el contenido con el nombre `verbose`

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger.verbose("Heeey!")
*/

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
=======

/*
  Al exportar una función/objeto así:

  > module.exports.verbose

  Estaremos exportando el contenido con el nombre `verbose`

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger.verbose("Heeey!")
*/

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
>>>>>>> ec3083d1dec836b4a2ca529a1ddd8f8dc7b9c576
  }