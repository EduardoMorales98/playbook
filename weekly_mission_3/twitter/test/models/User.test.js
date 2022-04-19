const User = require('./../../app/models/User');
describe("Unit Test for User class", () => {
    test('Create an User object', () => {
        //Aqui invocas el código que vas a usar en tu app
        const user=new User(1,"eduardomorales","Eduardo","Bio","dateCreated","lastUpdated");
        //Aquí validas los resultados de ese código
        //Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha(valor esperado)
        expect(user.id).toBe(1)
        expect(user.userName).toBe("eduardomorales")
        expect(user.name).toBe("Eduardo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})