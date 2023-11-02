//1
let number = 10;

if(number % 2 === 0){
    console.log(number + ' is even')
} else {
    console.log(`${number} is odd`)
}

//2
let age = 24;

if(age < 18){
    console.log('You are a minor')
} else if(age >= 18 && age <65){
    console.log('You are an adult')
} else {
    console.log('You are a senior citizen')
}

//3
let letter = 'e';

if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
    console.log(`${letter} is a vowel`)
} else if(letter === "y"){
    console.log(`${letter} is sometimes a vowel`)
}else {
    console.log(`${letter} is a consonant`)
}

//4
let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;

if(numberOne > numberTwo && numberOne > numberThree){
    console.log(`${numberOne} is the largest number`)
} else if (numberTwo > numberOne && numberTwo > numberThree){
    console.log(`${numberTwo} is the largest number`)
} else if(numberThree > numberOne && numberThree > numberTwo){
    console.log(`${numberThree} is the largest number`)
}
//5
let password = 'Test1233';


if(password.length < 8){
    console.log('Password too short')
} else if(/[0-9]/.test(password) === true && /[A-Za-z]/.test(password) === true){
    console.log('Password accepted')
} else{
    console.log('Password rejected')
}