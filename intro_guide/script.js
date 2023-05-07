//this is a comment
/* this is 
a multiline comment*/

/* Data types: undefined, null, boolean, string, symbol, number, and object*/


// var myName = "Beau"

// myName = 8

// let ourName = "Hello World"

// const pi = 3.14

// var a;
// var b = 2;
// console.log(a)

// a = 7;

// b = a;

// console.log(b)


// var a = 5;
// var b = 10;
// var c = "I am a";


// a = a + 1;
// b = b + 5;
// c = c + " String"


// var sum = 10 + 10;
// console.log(sum)

// var difference = 20 - 10;
// var multiplication = 20 * 20;
// var quotient = 66 / 0;

// var myVar = 77;
// myVar++;

// console.log(myVar)

// myVar--;

// var decimal = 3.99


// var product = 2.0 * 2.5;
// console.log(product)

// var quotient = 4.4 / 2.0;

// console.log(quotient)

// var remainder;
// remainder = 11 % 3;

// var a = 3;
// var b = 17;
// var c = 12;

// a += 12;
// b += 9;
// c += 7;


// a -= 12;
// b -= 9;
// c -= 7;


// a *= 5;
// b *= 3;
// c *= 12;

// a /= 12;
// b /= 4;
// c /= 11;

// var firstName = "Abdallah"

// var doubleQuotedString = "I am a \" double quoted string\""
// console.log(doubleQuotedString) 

// doubleQuotedString = 'I am a "double quoted string"'


// var myStr = "this is the start " + "this is the end."
// console.log(myStr)

// var myStr = "I come first ";
// myStr += "I come second";

// var myName = "Abdallah";
// var greeting = "Hello, " + myName + " How are you?";

// console.log(greeting)

// var adjective = "Awesome!";
// var ourStr = "Freecodecamp is ";

// ourStr += adjective;

// console.log(ourStr)

// var someAdjective = "worthwhile";
// var myStr = "Learing to code is ";
// myStr += someAdjective;
// console.log(myStr)

// var firstNameLength = 0;
// var firstName = "Ada";

// firstNameLength = firstName.length;

// var lastNameLength;
// var lastName = "Lovelace";

// lastNameLength = lastName.length

// console.log(lastNameLength)

// var firstName = "Ada";
// var firstLetterFirstName = firstName[0];

// console.log(firstLetterFirstName)

// var myStr = "Jelly World";

// myStr = "Hello World"

// console.log(myStr)

// var myStr = "Ada";
// var lastLetterofFirstName = myStr[myStr.length -1];

// console.log(lastLetterofFirstName);

// var thirdToLastLetter = myStr[myStr.length - 3];
// console.log(thirdToLastLetter);

// function wordBlanks(myNoun,myAdjective,myVerb,myAdverb) {
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb;
//     return result;
// }

// console.log(wordBlanks("Dog","Big","Ran","Quickly"));


// var outArray = ["John", 28];

// var ourArray = [["The universe",42],["Everything",101010]];

// console.log(ourArray)


// var ourArray = [50,60,70];

// var ourData = ourArray[0];

// ourData = ourArray[2];

// console.log(ourData)

// ourArray[1] = 45;

// console.log(ourArray);
// var myArray = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],13,14];

// var myData = myArray[1][2];

// console.log(myData);

// var ourArray = ["Hello World"];
// ourArray.push(["Bye World"]);
// console.log(ourArray)

// ourArray.pop()

// console.log(ourArray)

// ourArray = ["Hello","World"];

// ourArray.shift()

// console.log(ourArray)

// ourArray.unshift("Hello");

// console.log(ourArray)

// var shoppingList = [["Eggs",22],["Bread",15],["Pizza",1]];

// function ourReusableFunction() {
//     console.log("Heyya, World");
// }



// function ourFunctionWithArgs(a,b) {
//     console.log(a - b);
    
// }

// ourFunctionWithArgs(10, 5);


// var myOuterWear = "Shirt";

// function myOutfit() {
//     var myOuterWear = "Sweater";

//     return myOuterWear;
// }

// console.log(myOutfit())
// console.log(myOuterWear)

// function minusSeven(num) {
//     return num - 7;
// }

// console.log(minusSeven(10))

// function timesFIve(num) {
//     return num * 5;
// }

// console.log(timesFIve(5))

// var sum = 0;

// function addFive() {
//     sum += 5;
// }

// console.log(sum)



// function nextinLine(arr,item) {
//     arr.push(item);
//     return arr.shift();
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr))
// console.log(nextinLine(testArr,6));
// console.log("After: " + JSON.stringify(testArr));


// function welcomeToBooleans() {
//     return false;
// }

// function TrueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//         return "Yes that was true";
//     }
//     return "No that was not true";
// }


// console.log(TrueOrFalse(true))

// function testVal(val) {
//     if (val === 12) {
//         return "It is twelve";
//     }
//     return "It is not twelve";
// }

// console.log(testVal("12"))



// function testVal(val) {
//     if (val !== 12 ) {
//         return "It is not twelve"
//     }
//     return " it is twelve"
// }




// function testGreaterThan(x) {
//     if (x > 12) {
//         return "Greater than 12";
//     }
//     return "Less than or equal to 12";
// }


// function testAndOperator(x) {
//     if (x >= 10 && x <= 20) {
//         return "x is more than or equal to 10 and less than or equal to 20";
//     }
//     return "NO";
// }

// console.log(testAndOperator(10));

// function testAndOperator(x) {
//     if (x < 10 || x > 20) {
//         return "Yes";
//     }
//     return "NO";
// }

// console.log(testAndOperator(10));

// function test(val) {
//     if (val > 5) {
//         return "value is bigger than 5";
//     }
//     else {
//         return "Value is less than or equal to 5";
//     }
// }

// function test(val) {
//     if (val > 10 ) {
//         return "Greater than 10";
//     }
//     else if (val > 5){
//         return "Greater than 5";
//     } 
//     else {
//         return "Between 5 and 10";
//     }
// }

// console.log(test(7))

// function caseAndSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//             answer = "Alpha";
//             break;
//         case 2:
//             answer = "Beta";
//             break;
//         case 3:
//             answer = "Gamma";
//             break;
//         case 4:
//             answer = "Delta";
//             break;
//         default:
//             answer = "Unknown";
//     }
//     return answer
// }

// console.log(caseAndSwitch(5))



// function isless(a,b) {
//     return a<b;
// }

// console.log(isless(7,8))



// var ourDog =  {
//     "name":"Frank",
//     "legs": 4,
//     "tails": 1,
//     "friends": ['Everything!'],
//     "Hair Color": "Black"
// };

// console.log(ourDog.tails)
// console.log(ourDog["Hair Color"])

// delete ourDog.legs;


// var myMusic = [
//     {
//         "artist": "Billy Joel",
//         "title": "Piano Man",
//         "Release Year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold": true
//     },
//     {
//         "artist":"Beau Carnes",
//         "title":"Cereal Man",
//         "Release Year":2003,
//         "formats": [
//             "Youtube Video"
//         ]
//     }
//     //add record here
// ]

// var secondTree = myMusic[0].formats[1];
// console.log(secondTree)

// var collection = {
//     "2548": {
//         "album": "Slippery When Wet",
//         "artist":"Bon Jovi",
//         "tracks": [
//             "Let It Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "1245": {
//         "artist":"Robert Palmer",
//         "tracks":[]
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// };


// var collectionCopy = JSON.parse(JSON.stringify(collection))

// console.log(collectionCopy)

// function updateRecords(id,prop,value) {
//     if (value==="") {
//         delete collection[id][prop];
//     }
//     else if (prop==="tracks") {
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     } else {
//         collection[id][prop] = value;
//     }

//     return collection;
// }


// console.log(updateRecords("5439","artist","ABBA"))
// console.log(updateRecords("5439","tracks","test"))


// var myArray = [];

// var i = 0;
// while(i < 5) {
//     myArray.push(i)
//     i++;
// }

// console.log(myArray)

// var ourArray = [];

// for (var i=0; i<5;i++) {
//     ourArray.push(i)
// }


// var ourArray = [];

// for (var i=0; i<10; i+=2) {
//     ourArray.push(i);
// }

// console.log(ourArray)


// var ourArray = [];

// for (var i=10; i>0; i -= 2) {
//     ourArray.push(i)
// }

// console.log(ourArray)

// var ourArr = [9,10,11,12];
// var ourTotal = 0;

// for (var i=0; i<ourArr.length; i++) {
//     ourTotal += ourArr[i];
// }

// console.log(ourTotal);


// function multiplyALl(arr) {
//     var product = 1;

//     for (var i=0; i<arr.length; i++) {
//         for (var j=0; j<arr[i].length;j++) {
//             product *= arr[i][j];                                                                                                             
//         }
//     }
//     return product;
// }

// var product = multiplyALl([[1,2],[3,4],[5,6,7]]);

// console.log(product);


// var myArray = [];
// var i = 10;

// do {
//     myArray.push(i)
//     i++;
// } while (i < 5)

// console.log(i,myArray)

// function randomFraction() {
//     return Math.random();
// }

// console.log(randomFraction())


// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// function randomWholeNum() {
//     return Math.floor(Math.random() * 10);
// }


// console.log(randomWholeNum());

// function ourRandomRange(ourMin,ourMax) {
//     return Math.floor(Math.random() * (ourMax-ourMin+1)) + ourMin;
// }

// console.log(ourRandomRange(1,9));

// function convertToInteger(str) {
//     return parseInt(str);
// }

// console.log(convertToInteger("19"))


// function convertToInteger(str) {
//     return parseInt(str, 2)
// }

// console.log(convertToInteger("10011"));



// function checkEqual(a,b) {
//     return a===b ? true : false;
// }


// function CheckSign(num) {
//     return num > 0 ? "Positive" : num < 0 ? "negative" : "zero"
// }

// console.log(CheckSign(0))


// "let" only allows you to declare a variable only once 
// "const" read only variable that cannot be changed. can update const arrays however. Object.freeze() freezes const objects from changing



// const magic = () => new Date();

// const myConcat = (arr1,arr2) => arr1.concat(arr2);


// const increment = (function() {
//     return function increment(number,value=1) {
//         return number + value;
//     };
// })();

