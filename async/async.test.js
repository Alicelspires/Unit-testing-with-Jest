const fetchData = require('./async.js')

test('Should return correct todo (Promise)', () => {
    fetchData(1).then((todo) => {
         expect(todo.id).toBe(1)
    })
})

test('Should return correct todo (async)', async () => {
    const todo = await fetchData(1);
    expect(todo.id).toBe(1)
})