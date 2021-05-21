console.log("hello");
//alert("yoo");

var b = "smoothie";
console.log(b);

var someNumber = 45;
//console.log(someNumber);

//var age = prompt("What is your age?");

//document.getElementById("someText").innerHTML = age;

// Numbers in JavaScript
var num1 = 10;

//Increment num1 by one
num1++;

//Decrement num1 by 1
num1--;

console.log(num1);

//Devide, multiply *, remainder %
console.log(num1 % 6);

//Increment / decrement by any number now 10
num1 += 10;
console.log(num1);

/* !!!!!!! Functions !!!!!!!!
1. Create a function
2. Call the function
*/

//Create
function fun() {
    console.log("this is a function");
}

//Call
fun();

/* Creating a function that takes in a name and says hello followed by your name
For example
Name "Alex"
Return: "Hello Alex"
*/

function greeting(yourName) {
    var result = "Hello " + yourName;
    console.log(result);
}
//var name = prompt("What's your name?");
//greeting(name);


//How do arguments work in functions?
//How do we add 2 numbers together in a function?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

/* While loops

var num = 0;

while (num < 100) {
    num +=1;
    console.log(num);
}

*/

// For loop

for (let num = 0; num <= 100; num++) {
    console.log(num);
}

//Data types
let yourAge = 18;                                   //number
let yourName = "Bob";                               //string
let name = { first: "Jane", last: "Doe" };          // object
let truth = false;                                  // boolean
let groceries = ["apple", "banana", "oranges"];    // array
let random;                                        // undefined
let nothing = null; // value null


//Strings in Javascript (common methods)
let fruit = "banana";
let moreFruits = "banana\napple";                   // new line 

console.log(fruit.length);
console.log(fruit.indexOf("b"));
console.log(fruit.slice(2.6));                     // in string first character is 0
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);                            //same thing as last one
console.log(fruit.split (','));                    //split by a coma
console.log(fruit.split(''));                      //split by characters


// Array
let fruits = ["banana", "apple", "orange", "pineaplles"];
fruits = new Array ("banana", "apple", "orange", "pineaplles");

console.log(fruits[2]);       //Access values at index 2    // in Array first character is 0

fruits[0] = "pear";
console.log (fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods
console.log ("to string", fruits.toString());
console.log (fruits.join(" * "));
console.log (fruits, fruits.pop(), fruits);          //removes last item
console.log (fruits.push("blackberries"), fruits);    //appends 
console.log(fruits[4]);
fruits[fruits.length] = "new fruit"; //same as push
console.log(fruits)
fruits.shift();    // removes first element from array, not great to use
console.log(fruits)
fruits.unshift("kiwi"); // add first element to a array
console.log(fruits)


let vegetables = ["asparagus", "tomato", "broccoli"];
let allGroceries = fruits.concat(vegetables);           // concat combines arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));    //slice array 1, 4 are indexes from 1 to 4 to slice
console.log(allGroceries.reverse());      // reverse array
console.log(allGroceries.sort());         // sort array, if words than alphabetically

let someNumbers = [5 ,10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b}));  // sorted in ascending order
console.log(someNumbers.sort(function(a, b) {return b-a}));  // sorted in descending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in Javascript   (in python dictionaries)

let student = {
    first: "Alex", 
    last: "Naumov",
    age:35, 
    height:180,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;       // this is kinda like "from this function"
    }
};
//console.log(student.first);
//console.log(student.last);
//student.first = "notAlex";   // change value
//console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());



//  Conditionals, Control flows ( if else)
// 18-35 is my target demographic
// && AND
// || OR
let age = prompt('what is your age?');

if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);

} else {
    status = 'not my audience';
    console.log(status);

}

// Switch statements
// differentiate between errkday vs. weekend





