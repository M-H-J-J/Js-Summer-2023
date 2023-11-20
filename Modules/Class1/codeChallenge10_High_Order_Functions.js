//1. Write a function that takes an array of objects representing books
//and returns an array containing the titles of those books.
let books = [
    {
        title: 'The Rise of Kyoshi',
        author: 'F.C. Yee',
        published: 2019,
    },
    {
        title: 'The Shadow of Kyoshi',
        author: 'F.C. Yee',
        published: 2020,
    },
    {
        title: 'Victorious Drama',
        author: 'M. Hamm',
        published: 1995,
    },
    {
        title: 'Ye Olde Poems',
        author: 'Flouty Bates',
        published: 1817,
    },
    {
        title: 'A Turn in Time',
        author: 'MHJJ',
        published: 2000
    }
]
let booktitles = books.map((titles) => {
    return titles.title;
})
console.log(booktitles)

//2. Write a function that takes an array of objects representing products
//and returns an array containing only the products that are currently in stock.
let products = [
    {
        name: 'soap',
        inStock: true
    },
    {
        name: 'baking soda',
        inStock: true
    },
    {
        name: 'baking powder',
        inStock: false
    },
    {
        name: 'salt',
        inStock: true
    }
]
let productsInStock = products.filter((stocked) => {
    return stocked.inStock === true
})
console.log(productsInStock)

//3. Write a function that takes an array of objects representing users
//and returns the first user whose email address matches a given email.
let users = [
    { id: 1, username: 'alice', email: 'alice@example.com'},
    { id: 2, username: 'bob', email: 'bob@example.com'},
    { id: 3, username: 'charlie', email: 'charlie@example.com'},
    { id: 4, username: 'dave', email: 'dave@example.com'}
];
let user = users.find((user) => {
    return user.email === 'charlie@example.com';
})
console.log(user)

//4. Write a function that takes an array of objects representing tasks
//and returns true if all the tasks are marked as complete, otherwise returns false.
let tasks = [
    {
        name: 'grocery shopping',
        complete: true
    },
    {
        name: 'excercise',
        complete: true
    },
    {
        name: 'water plants',
        complete: false
    }
]
function tasksComplete(task) {
    let allDone
    for (i=0; i < task.length; i++){
        if (task[i].complete === false){
            let allDone = false
            return false
        }
    } if (allDone === undefined){
        return true
    }
}
console.log(tasksComplete(tasks))

//5. Write a function that takes an array of objects representing purchases
//and returns the total amount spent on those purchases.
let purchases = [
    {
        item: 'milk',
        cost: 8.99
    },
    {
        item: 'bananas',
        cost: 4.59
    },
    {
        item: 'eggs',
        cost: 10.99
    }
]
function purchaseTotal(items) {
    let total = 0;
    for (i = 0; i < items.length; i++){
        total += items[i].cost
    }
    return total;
}
console.log(purchaseTotal(purchases))

//6. Write a function that takes an array of numbers as input
//and returns the sum of all the numbers in the array.
let numbers = [1, 2, 3, 4, 5]
function arrayTotal(array) {
    let total = 0;
    for (i = 0; i < array.length; i++){
        total += array[i]
    }
    return total;
}
console.log(arrayTotal(numbers))

//7. Write a function that takes an array of strings as input
//and returns a new array with all the strings converted to uppercase.
let stringArray = ['pineapple', 'kiwi', 'orange'];
let upperCaseArray = stringArray.map((word) => {
    return word.toUpperCase()
})
console.log(upperCaseArray)

//8. Write a function that takes an array of numbers as input
//and returns a new array with all the even numbers from the original array.
let evenNumbers = numbers.filter((number => {
    return number % 2 == 0;
}))
console.log(evenNumbers);

//9. Write a function that takes an array of strings as input
//and returns a new array with all the strings that have a length of 4 or less.
let smallStrings = stringArray.filter((word) =>{
    return word.length <= 4
})
console.log(smallStrings)