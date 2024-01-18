// One way String declaration
const name = "sharique"

const repoCount = 50
// We Should Avoid this "+" practice for string concatenation
// console.log(name + repoCount + " Value");

// Instead Will be Using Modern Technique (String Interpolation)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another Way of String Declaration
const gameName = new String('sharique.com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sharique    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sharique.com%20siddiqui"

console.log(url.replace('%20', '-'))

// To check whether this value present in variable
console.log(url.includes('wifi')) // return True or false 

console.log(gameName.split('-'));
// will return array of elements