const isAnagram = require('./anagram.js');

test('isAnagram function exist', () => {
    expect(typeof isAnagram).toEqual('function')
    expect(isAnagram).toBeDefined();
})

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('"Dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy()
})

test('"Hello" is an anagram of "dirty aloha"', () => {
    expect(isAnagram('Hello', 'dirty aloha')).toBeFalsy()
})