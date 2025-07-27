const chunkArray = require('./chunk.js');

test('chunkArray function exists', () => {
    expect(chunkArray).toBeDefined();
})

test('Chunk an array od 10 values with length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkArr = chunkArray(numbers, len);

    expect(chunkArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
})
