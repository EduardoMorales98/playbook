import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});

//TDD Test Driven Development
// 1)Escribir una prueba de lo que quieres modelar
// 2)Correr la prueba y verla fallar
// 3)Escribir el código necesario que haga pasar a esa prueba