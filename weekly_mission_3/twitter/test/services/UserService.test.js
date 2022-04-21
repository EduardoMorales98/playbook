const UserService = require('./../../app/services/UserService')
describe("Test for UserService", () => {
    test('1.- Create a new user using the UserService', () => {
        const user=UserService.create(1,"eduardomorales","eduardo")
        expect(user.userName).toBe("eduardomorales")//Se toma el nombre de la propiedad de User.js y no de UserService
        expect(user.name).toBe("eduardo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    });
})