//1
let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];

let combinedArray = [...arrayOne, ...arrayTwo]
console.log(combinedArray)

//2
let originalArray = ['banana', 'apple', 'cherry'];
let newArray = [...originalArray, 'kiwi']
console.log(newArray)

//3
let originalObject = {name: 'John', age: 30};
let newObj = {...originalObject, gender: 'NB'};
console.log(newObj)

//4
let numbersArray = [4, 8, 1, 6, 9, 2];
let highestNumber = 0
for(let key in numbersArray) {
    if(numbersArray[key] > highestNumber){
        highestNumber = numbersArray[key]
    }
}
console.log(`The highest number out of ${numbersArray} is ${highestNumber}`)

//5
newArray.sort()
console.log(newArray)