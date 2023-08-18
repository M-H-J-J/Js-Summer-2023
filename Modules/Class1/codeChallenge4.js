//1
let studentNames = ['Maxwell', 'Bill', 'Anthony', 'Raufin', 'Haifa'];
console.log(studentNames);
//2
console.log(studentNames.length);
//3
studentNames.pop();
console.log(studentNames);
studentNames.push('Kate');
console.log(studentNames);
studentNames.unshift('Matthew');
console.log(studentNames);
studentNames.splice(3, 1, 'Haifa');
console.log(studentNames);
//4
console.log(studentNames.includes('John'));
//5
console.log(studentNames.indexOf('Kate'));
//6
studentNames.reverse();
console.log(studentNames.lastIndexOf('Kate'));
//7
console.log(studentNames.lastIndexOf('Kate') === studentNames.indexOf('Kate'));