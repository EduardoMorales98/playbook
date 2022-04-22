const UserService = require('./../../app/services/UserService')
describe("Test for UserService", () => {
    test('1.- Create a new user using the UserService', () => {
        const user=UserService.create(1,"eduardomorales","eduardo")
        expect(user.userName).toBe("eduardomorales")//Se toma el nombre de la propiedad de User.js y no de UserService
        expect(user.name).toBe("eduardo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test('2.- Get all user data in a list', () => {
        const user=UserService.create(1,"eduardomorales","eduardo")
        const userInfoList=UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("eduardomorales")
        expect(userInfoList[2]).toBe("eduardo")
        expect(userInfoList[3]).toBe("Sin bio")
    });

    
    test('3.- Update username', () => {
        const user=UserService.create(1,"eduardomorales","eduardo")
        UserService.updateUsername(user,"eduardomrls")
        expect(user.userName).toBe("eduardomrls")
    });

    test('3.- Given a list of users give me the list of usernames', () => {
        const user1=UserService.create(1,"eduardomorales1","eduardo")
        const user2=UserService.create(1,"eduardomorales2","eduardo")
        const user3=UserService.create(1,"eduardomorales3","eduardo")
        const usernames=UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("eduardomorales1")
        expect(usernames).toContain("eduardomorales2")
        expect(usernames).toContain("eduardomorales3")
    });
})