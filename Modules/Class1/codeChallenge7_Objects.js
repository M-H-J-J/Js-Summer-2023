//1
let employee = {
    name: 'Kris',
    age: 21,
    salary: '$55,000',
    jobTitle: 'Coder',
    work: function(){
        console.log(`${employee.name} has begun working`)
    }
}

//2
let bankAccount = {
    accountNumber: 159753,
    balance: 8787,
    deposit: function(depositAmount){
        this.balance += depositAmount
        console.log(`Your new balance is ${this.balance}`)
    },
    withdraw: function(withdrawAmount) {
        this.balance -= withdrawAmount
        console.log(`Your new balance is ${this.balance}`)
    }
}

//3
let dog = {
    breed: 'Husky',
    age: 9,
    colour: 'White, black, and brown',
    bark: function(){
        console.log('BARK!')
    },
    wagTail: function(){
        console.log(`The ${dog.breed} wags their tail.`)
    },
    fetch: function(string){
        console.log(`The ${dog.breed} fetches the ${string} enthusiastically!`)
    }
}
//dog.fetch('stick')

//4
let newProduct = {
    name: 'Snailboard',
    price: 189,
    manufacturer: 'Roots',
    category: 'Sporting Equipment'
}

//5
newProduct.description = 'A new slower, safer way to hit the halfpipe!'

//6
newProduct.price += 10

//7
delete newProduct.description

//8
let blogPosts = [
    {
        title: 'Eating Out',
        author: 'Jack Black',
        date: '2022-02-28',
        content: 'Jack really hits the town this time!'
    },
    {
        title: 'Eating In',
        author: 'Jack Black',
        date: '2022-02-29',
        content: 'Here Jack goes again!' 
    },
    {
        title: 'Eating It All',
        author: 'Jack Black',
        date: '',
        content: 'Uh-oh, Jack!'
    }
]

for(let key in blogPosts){
    if(blogPosts[key].date === ''){
        console.log(`${blogPosts[key].title} is missing a date.`)
    }
}