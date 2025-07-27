const {shoopingList, functions, sum} = require("./function.js");


test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

// to check for false values
test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

test('sum function exists', () => {
    expect(sum).toBeDefined();
})

it("adds 1 + 2 equals 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3)
})

// A way to group all the tests 
describe("example tests", () => {
    it("adds 1 + 2 equals 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3)
    })

    it("object assigment", () => {
        const obj = {};
        expect(obj).toEqual({})
    })

})

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})


test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad', 
        lastName: 'Traversy'
    })
})

// Less than and greater than;
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
})

// Using regular expressions
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

test('There is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
})

// Check if there's some item
test('The shooping contains milk on it', () => {
    expect(shoopingList).toContain('milk');
    expect(new Set(shoopingList)).toContain('milk')
})

// Working with async data

// Promise
test('User fetched name should be Leanne Graham (Promise)', () => {
    // expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

// Async
test('User fetched name should be Leanne Graham (async)', async () => {
    // expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})