const axios = require('axios')

const sum = (num1, num2) => {
    return num1 + num2;
}

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {firstName: 'Brad'}
        user['lastName'] = 'Traversy'
        return user;
    },
    fetchUser: () => axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
}

const shoopingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
]


module.exports = {shoopingList, functions, sum}