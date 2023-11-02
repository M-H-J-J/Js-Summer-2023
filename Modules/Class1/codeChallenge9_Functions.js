//1
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
function addNumbers(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum
}
console.log(addNumbers(numberArray));


//2
let stringSample = 'Over the moon'
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString(stringSample));


//3
let people = [
    {
        name: 'Ellie',
        age: 16,
        gender: 'NB',
    },
    {
        name: 'Trudy',
        age: 23,
        gender: 'female',
    },
    {
        name: 'Alvin',
        age: 34,
        gender: 'male',
    }
]
function over18(array){
    let over18Array = []
    for(let i = 0; i < array.length; i++){
        if(array[i].age > 18){
            over18Array.push(array[i])
        }
    }
    return over18Array
}
console.log(over18(people))


//4
function filterEvenNumbers(numbers){
    let evenNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            evenNumbers.push(numbers[i])
        }
    }
    return evenNumbers
}
console.log(filterEvenNumbers(numberArray));


//5
let fruit = ['Apple', 'Cherry', 'Peach', 'Apricot', 'avocado']
function startsWithA(stringArray){
    let onlyAArray = [];
    let onlyA = 'Aa';
    for(let i = 0; i < stringArray.length; i++){
        if(onlyA.includes(stringArray[i].charAt(0))){
            onlyAArray.push(stringArray[i]);
        }
    }
    return onlyAArray
}
console.log(startsWithA(fruit))


//6
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
function books2000(array){
    let after1999 = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].published >= 2000){
            after1999.push(array[i].title)
        }
    } return after1999
}
console.log(books2000(books))


//7
function largerOfTwo(a,b){
    if(a > b){
        return a
    }
    if(b > a){
        return b
    }
    if(a === b){
        return 'The numbers are the same'
    }
}
console.log(largerOfTwo(11,15))


//8
let numArray = [12, 88, 3]
function smallestNumber(numbers){
    return Math.min(...numbers)
}
console.log(smallestNumber(numArray))


//9
let stringArray1 = ['Small', 'Medium', 'Gigantic']
function longestString(stringArray){
    let longestString1;
    let length = 0
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i].length > length){
            length = stringArray[i].length;
            longestString1 = stringArray[i]
        } 
    } return longestString1
}
console.log(longestString(stringArray1))


10//
let students = [
    {
        name: 'Bobby',
        grade: 'B',
    },
    {
        name: 'Jon',
        grade: 'A',
    },
    {
        name: 'Gertrude',
        grade: 'C',
    },
    {
        name: 'Pryshan',
        grade: 'A',
    }
]
function gradeAStudents(array){
    let gradeA = []
    for (let i = 0; i <array.length; i++){
        if (array[i].grade === 'A'){
            gradeA.push(array[i].name)
        }
    } return gradeA
}
console.log(gradeAStudents(students))