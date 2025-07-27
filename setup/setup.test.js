let animals = ['elephant', 'zebra', 'bear', 'tiger'];

beforeEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

describe("animals array", () => {
    it("should add animal to end of the array", () => {
        animals.push("aligator")
        expect(animals[animals.length - 1]).toBe("aligator");
    })

    it("should add animal to begginning of array", () => {
        animals.unshift("aligator")
        expect(animals[0]).toBe("aligator");
    })

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    })
})

describe("testing something else", () => {
    it.only("true should be truthy", () => {
        expect(true).toBeTruthy()
    })
})