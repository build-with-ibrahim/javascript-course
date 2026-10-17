// var, let, const
// declaration and initialization

var a;
var b = 12;

// var
var c = 19;

// var can be redeclared and reassigned
var d = 12;
d = 6;
var d = 10;

// let can be reassigned but not redeclared
let age = 12;
age = 13;

// const cannot be reassigned
const dulha = "labuba";
const dulhan = "lady";

console.log(dulha + " weds " + dulhan);

// let and var reassignment
let dulhabylet = "labuba";
let dulhanbylet = "lady";
dulhabylet = "harramzada";

console.log(dulhabylet + " weds " + dulhanbylet);

var dulhabyvar = "labuba";
var dulhanbyvar = "lady";
dulhabyvar = "harramzada";

console.log(dulhabyvar + " weds " + dulhanbyvar);

// reassignment
let reassignment = 12;
reassignment = 6;

// redeclaration with var
var redeclaration = 10;
var redeclaration = 20;

console.log(redeclaration);

// temporal dead zone
// console.log(e);
// let e = 2;

// var hoisting
console.log(f); // undefined
var f = 1;

console.log(g); // undefined
var g = 15;

// let and const are hoisted but remain in TDZ
// console.log(hh);
// let hh = 20;

// console.log(ii);
// const ii = 30;

// scope (global, block, function)
var globalVariable = 19;

{
    var globalVariable = 20;
}

console.log(globalVariable); // 20

let blockVariable = 10;

{
    let blockVariable = 20;
    console.log(blockVariable); // 20
}

console.log(blockVariable); // 10

// data types
// primitive: string, number, boolean, undefined, null, symbol, bigint

let i = true;
let j = false;

console.log(i, j);

let nothing = null;

let k;
console.log(k); // undefined

// symbol: unique primitive value
let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2); // false

// objects
let obj = {
    uid: 1,
    name: "ibrahim",
    age: 12,
    email: "ibrahim@gmail.com"
};

let no = Symbol("uid");
obj[no] = 8595507101;

console.log(obj[no]);

// reference types: arrays, objects, functions
let array = [1, 2, 3];
let copyarray = array;

copyarray.pop();

console.log(array);     // [1, 2]
console.log(copyarray); // [1, 2]

// actual shallow copy
let originalArray = [1, 2, 3];
let separateArray = [...originalArray];

separateArray.pop();

console.log(originalArray); // [1, 2, 3]
console.log(separateArray); // [1, 2]

// objects
let objects = {
    username: "ibrahim"
};

let copyobjects = objects;
copyobjects.username = "maaz";

console.log(objects.username); // maaz

// dynamic typing
let dynamictyping = 12;
dynamictyping = true;
dynamictyping = "ibrahim";
dynamictyping = [1, 2, 3];
dynamictyping = null;
dynamictyping = undefined;

// typeof quirks
console.log(typeof a);    // undefined
console.log(typeof b);    // number
console.log(typeof c);    // number
console.log(typeof d);    // number
console.log(typeof NaN);  // number

// type coercion
console.log(5 + "1"); // "51"
console.log(5 - "1"); // 4

// truthy and falsy values
// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// document.all is a special browser exception

console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false
console.log(Boolean("ibrahim"));  // true

// NaN
let nan = NaN;
console.log(typeof nan); // number

// arithmetic operators
console.log(5 + 5);           // 10
console.log("ibrahim " + "ahmad");
console.log(10 - 5);          // 5
console.log(5 * 5);           // 25
console.log(10 / 5);          // 2
console.log(13 % 5);          // 3 (remainder)
console.log(5 ** 5);          // 3125

// comparison operators
console.log(12 == "12");   // true
console.log(12 === "12");  // false

console.log(12 != 13);     // true
console.log(12 != "12");   // false

console.log(12 !== 13);    // true
console.log(12 !== "12");  // true

console.log(15 > 13);      // true
console.log(15 < 13);      // false
console.log(15 <= 15);     // true
console.log(15 >= 15);     // true

// assignment operators
let equal2 = 10;

console.log(equal2 += 3); // 13
console.log(equal2 -= 5); // 8
console.log(equal2 *= 5); // 40
console.log(equal2 /= 5); // 8
console.log(equal2 %= 5); // 3

// logical operators
console.log(true && true);   // true
console.log(false && true);  // false

console.log(true || true);   // true
console.log(false || true);  // true

console.log(!true);          // false
console.log(!!12);           // true
console.log(!!0);            // false

// unary operators
let Unarya = 10;
let Unaryb = -5;
let Unaryc = true;
let Unaryd = "Ibrahim";

console.log(+Unarya);        // 10
console.log(-Unarya);        // -10
console.log(!Unaryc);        // false
console.log(!false);         // true

console.log(typeof Unarya);       // number
console.log(typeof Unaryd);       // string
console.log(typeof Unaryc);       // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object
console.log(typeof {});            // object

// increment
let Unaryx = 5;
console.log(++Unaryx); // 6

let Unaryy = 5;
console.log(Unaryy++); // 5
console.log(Unaryy);   // 6

// decrement
let Unaryp = 5;
console.log(--Unaryp); // 4

let Unaryq = 5;
console.log(Unaryq--); // 5
console.log(Unaryq);   // 4

// ternary operator
console.log(12 > 13 ? "true" : "false");

// instanceof
let arr = [1, 2, 3];

console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true

let objj = {
    name: "Ibrahim"
};

console.log(objj instanceof Object); // true
console.log(objj instanceof Array);  // false

let date = new Date();

console.log(date instanceof Date);   // true
console.log(date instanceof Object); // true

// q1: grade using ternary operator
let score = 78;

let grade =
    score >= 90 ? "A" :
    score >= 75 ? "B" :
    score >= 60 ? "C" : "Fail";

console.log(grade); // B

// control flow: if, else if, else
let loggedin = true;
let admin = true;

if (!loggedin) {
    console.log("Please log in");
} else if (admin) {
    console.log("You are admin");
} else {
    console.log("You are normal user");
}

// switch case
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid day");
}

// early return pattern
function checkAge(age) {
    if (age < 18) {
        return "You cannot vote";
    }

    return "You can vote";
}

console.log(checkAge(20));

// q2: grade using if-else
function getgrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else {
        return "Fail";
    }
}

console.log(getgrade(90)); // A

// for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while loop
let start = 1;

while (start < 33) {
    console.log(start);
    start++;
}

// do-while loop
let dowhilestart = 1;

do {
    console.log(dowhilestart);
    dowhilestart++;
} while (dowhilestart < 20);

// if inside a loop with break
for (let i = 1; i <= 20; i++) {
    if (i === 19) {
        console.log("19 is lucky number");
        break;
    }

    console.log(i);
}

// if inside a loop with continue
for (let i = 1; i <= 20; i++) {
    if (i === 19) {
        continue;
    }

    console.log(i);
}

// prompt and alert
// let getname = prompt("what's your name?")
// alert(`${getname} is your name`)

// 1. BASIC FUNCTION

// function keyword se function banate hain.
// sayHello function ka naam hai.

function sayHello() {
    console.log("Hello Ibrahim");
}

// Function banane se code turant execute nahi hota.
// Function ko chalane ke liye call karna padta hai.

sayHello(); // Output: Hello Ibrahim
sayHello(); // Output: Hello Ibrahim

// 2. FUNCTION WITH PARAMETERS

// Parameters function ke input variables hote hain.
// name ek parameter hai.

function greet(name) {
    console.log("Hello " + name);
}

// "Ibrahim" argument hai.
// Argument woh actual value hai jo function ko dete hain.

greet("Ibrahim"); // Hello Ibrahim
greet("Ali");     // Hello Ali
greet("Maaz");    // Hello Maaz

// 3. MULTIPLE PARAMETERS

// Function multiple inputs le sakta hai.

function add(a, b) {
    console.log(a + b);
}

// a = 10 aur b = 20
add(10, 20); // Output: 30

add(5, 7); // Output: 12

// 4. RETURN

// return function se result bahar bhejta hai.
// Result ko variable mein store kar sakte hain.

function sum(a, b) {
    return a + b;
}

let result = sum(10, 20);

console.log(result); // Output: 30

// return ke baad function ka execution stop ho jata hai.
// return ke baad likha code execute nahi hota.

function test() {
    return 10;
    console.log("Hello"); // Ye execute nahi hoga
}

console.log(test()); // Output: 10

// 5. CONSOLE.LOG VS RETURN

// console.log() sirf output print karta hai.

function firstFunction() {
    console.log(10 + 20);
}

firstFunction(); // Output: 30

// return result ko function ke bahar deta hai.

function secondFunction() {
    return 10 + 20;
}

let answer = secondFunction();

console.log(answer); // Output: 30

// 6. FUNCTION WITH CONDITIONS

// Function ke andar if-else use kar sakte hain.

function checkAge(age) {
    if (age >= 18) {
        return "You can vote";
    } else {
        return "You cannot vote";
    }
}

console.log(checkAge(20)); // You can vote
console.log(checkAge(15)); // You cannot vote

// 7. EARLY RETURN PATTERN

// Agar condition true ho, toh function turant return karega.

function checkNumber(num) {
    if (num < 0) {
        return "Negative number";
    }

    if (num === 0) {
        return "Zero";
    }

    return "Positive number";
}

console.log(checkNumber(-5)); // Negative number
console.log(checkNumber(0));  // Zero
console.log(checkNumber(8));  // Positive number

// 8. FUNCTION EXPRESSION

// Function ko variable mein store kar sakte hain.

const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // Output: 20

// Note: function expression ko declaration se
// pehle call nahi kar sakte jab variable const ho.

// 9. ARROW FUNCTION

// Arrow function likhne ka short method hai.

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 4)); // Output: 6

// 10. SHORT ARROW FUNCTION

// Jab sirf ek expression return karna ho,
// curly braces aur return hata sakte hain.

const square = num => num * num;

console.log(square(5)); // Output: 25

// Ye iske barabar hai:
// const square = (num) => {
//     return num * num;
// };

// 11. DEFAULT PARAMETERS

// Agar argument nahi diya, toh default value use hogi.

function welcome(name = "Guest") {
    console.log("Welcome " + name);
}

welcome("Ibrahim"); // Welcome Ibrahim
welcome();          // Welcome Guest

// 12. FUNCTION WITH ARRAY
// Array ko function mein argument ke roop mein de sakte hain.

function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

printNumbers([10, 20, 30]);

// Output:
// 10
// 20
// 30

// 13. FUNCTION WITH OBJECT

// Object ki properties function ke andar access kar sakte hain.

function showUser(user) {
    console.log(user.name);
    console.log(user.age);
}

showUser({
    name: "Ibrahim",
    age: 14
});

// Output:
// Ibrahim
// 14

// 14. REST PARAMETERS
// ...numbers multiple arguments ko ek array mein
// collect karta hai.

function addAll(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

console.log(addAll(1, 2, 3));       // 6
console.log(addAll(10, 20, 30, 40)); // 100

// 15. CALLBACK FUNCTION

// Callback ek function hota hai jo doosre function
// ko argument ke roop mein diya jata hai.

function processUser(name, callback) {
    callback(name);
}

function sayWelcome(name) {
    console.log("Welcome " + name);
}

processUser("Ibrahim", sayWelcome);

// Output: Welcome Ibrahim

// 16. FUNCTION INSIDE A FUNCTION
// Ek function ke andar doosra function bana sakte hain.

function outer() {
    console.log("Outer function");

    function inner() {
        console.log("Inner function");
    }

    inner();
}

outer();

// Output:
// Outer function
// Inner function

// 17. RECURSION
// Recursion mein function khud ko call karta hai.
// Base case recursion ko stop karta hai.

function countdown(n) {
    if (n === 0) {
        console.log("Done!");
        return;
    }

    console.log(n);

    countdown(n - 1);
}

countdown(3);

// Output:
// 3
// 2
// 1
// Done!

// ==========================================
// 1. ARRAY BASICS
// ==========================================

// Array ek variable mein multiple values store karta hai.

let fruits = ["Apple", "Banana", "Mango"];

// Array ka poora data print karo.
console.log(fruits);

// Index se ek element access karte hain.
// Array ka index 0 se start hota hai.

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango

// ==========================================
// 2. ARRAY LENGTH
// ==========================================

// length batata hai ki array mein kitne elements hain.

console.log(fruits.length); // 3

// Last element ka index length - 1 hota hai.
console.log(fruits[fruits.length - 1]); // Mango

// ==========================================
// 3. CHANGE ARRAY ELEMENT
// ==========================================

// Index ki help se element change kar sakte hain.

fruits[1] = "Orange";

console.log(fruits);
// ["Apple", "Orange", "Mango"]

// ==========================================
// 4. PUSH AND POP
// ==========================================

// push() array ke end mein element add karta hai.

fruits.push("Grapes");

console.log(fruits);
// ["Apple", "Orange", "Mango", "Grapes"]

// pop() last element remove karta hai.

fruits.pop();

console.log(fruits);
// ["Apple", "Orange", "Mango"]

// ==========================================
// 5. UNSHIFT AND SHIFT
// ==========================================

// unshift() beginning mein element add karta hai.

fruits.unshift("Pineapple");

console.log(fruits);
// ["Pineapple", "Apple", "Orange", "Mango"]

// shift() first element remove karta hai.

fruits.shift();

console.log(fruits);
// ["Apple", "Orange", "Mango"]

// ==========================================
// 6. INDEXOF AND INCLUDES
// ==========================================

let numbers = [10, 20, 30, 40];

// indexOf() element ka index deta hai.
console.log(numbers.indexOf(30)); // 2

// Element nahi mila toh -1 deta hai.
console.log(numbers.indexOf(50)); // -1

// includes() check karta hai element present hai ya nahi.
console.log(numbers.includes(20)); // true
console.log(numbers.includes(99)); // false

// ==========================================
// 7. SLICE
// ==========================================

// slice() array ke selected elements ki copy deta hai.
// Original array change nahi hota.

// slice(start, end)
// Start index included hai, end index excluded hai.

let nums = [10, 20, 30, 40, 50];

let selected = nums.slice(1, 4);

console.log(selected); // [20, 30, 40]
console.log(nums);     // [10, 20, 30, 40, 50]

// ==========================================
// 8. SPLICE
// ==========================================

// splice() original array ko change karta hai.

// splice(startIndex, deleteCount)

let values = [10, 20, 30, 40];

values.splice(1, 2);

// Index 1 se 2 elements remove ho gaye.
console.log(values); // [10, 40]

// ==========================================
// 9. LOOP THROUGH AN ARRAY
// ==========================================

let marks = [80, 90, 75, 95];

// Normal for loop se elements access karna.
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// Output:
// 80
// 90
// 75
// 95

// ==========================================
// 10. FOR...OF LOOP
// ==========================================

// for...of directly array ki values deta hai.

let names = ["Ibrahim", "Ali", "Maaz"];

for (let name of names) {
    console.log(name);
}

// ==========================================
// 11. FOREACH
// ==========================================

// forEach() har element ke liye callback function chalata hai.

let scores = [10, 20, 30];

scores.forEach(function(score) {
    console.log(score);
});

// Arrow function ke saath:
scores.forEach(score => console.log(score));

// ==========================================
// 12. MAP
// ==========================================

// map() har element par operation karke
// ek naya array return karta hai.

let oldNumbers = [1, 2, 3, 4];

let doubled = oldNumbers.map(function(num) {
    return num * 2;
});

console.log(doubled);   // [2, 4, 6, 8]
console.log(oldNumbers); // [1, 2, 3, 4]

// ==========================================
// 13. FILTER
// ==========================================

// filter() condition pass karne wale elements
// ka naya array banata hai.

let ages = [12, 18, 25, 15, 30];

let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults); // [18, 25, 30]

// ==========================================
// 14. FIND
// ==========================================

// find() pehla element return karta hai
// jo condition pass karta hai.

let findNumbers = [5, 12, 18, 25];

let found = findNumbers.find(num => num > 15);

console.log(found); // 18

// ==========================================
// 15. REDUCE
// ==========================================

// reduce() array ki values ko combine karke
// ek final result bana sakta hai.

let prices = [100, 200, 300];

let totalPrice = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

// 0 initial value hai.
// Har round mein price, sum mein add hota hai.

console.log(totalPrice); // 600

// ==========================================
// 16. SPREAD OPERATOR
// ==========================================

// ... array ke elements ko spread karta hai.
// Is tarah shallow copy bana sakte hain.

let original = [1, 2, 3];

let copied = [...original];

copied.push(4);

console.log(original); // [1, 2, 3]
console.log(copied);   // [1, 2, 3, 4]

// ==========================================
// 17. MERGE ARRAYS
// ==========================================

let firstArray = [1, 2];
let secondArray = [3, 4];

let mergedArray = [...firstArray, ...secondArray];

console.log(mergedArray); // [1, 2, 3, 4]

// ==========================================
// 18. DESTRUCTURING
// ==========================================

// Destructuring se array ki values variables mein nikalte hain.

let colors = ["Red", "Green", "Blue"];

let [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Red
console.log(secondColor); // Green
console.log(thirdColor);  // Blue

// ==========================================
// 19. NESTED ARRAYS
// ==========================================

// Ek array ke andar doosra array ho sakta hai.

let matrix = [
    [1, 2],
    [3, 4]
];

// Pehla index outer array ko select karta hai.
// Doosra index inner array ka element select karta hai.

console.log(matrix[0][0]); // 1
console.log(matrix[0][1]); // 2
console.log(matrix[1][0]); // 3
console.log(matrix[1][1]); // 4

/*
====================================================
          JAVASCRIPT OBJECTS COMPLETE GUIDE
====================================================

OBJECT KYA HOTA HAI?

Object ek aisa data structure hai jismein hum
related information ko ek jagah store karte hain.

Example:
Ek student ka naam, age, class aur marks alag-alag
variables mein rakhne ke bajaye, ek object mein rakh sakte hain.

Object mein data KEY : VALUE pairs mein hota hai.

Syntax:

let objectName = {
    key: value,
    key: value
};

*/

// ==================================================
// 1. CREATING AN OBJECT
// ==================================================

// Ek student object create kiya.
let student = {
    name: "Ibrahim",
    age: 14,
    class: 9,
    isLearningJavaScript: true
};

// name, age, class aur isLearningJavaScript
// object ki KEYS (properties ke names) hain.

// "Ibrahim", 14, 9 aur true unki VALUES hain.

// Object ko print karne par poora object show hoga.
console.log(student);

// ==================================================
// 2. ACCESSING OBJECT PROPERTIES
// ==================================================

// METHOD 1: DOT NOTATION

// Object ka naam likho, phir dot, phir key.
console.log(student.name);  // Ibrahim
console.log(student.age);   // 14
console.log(student.class); // 9

// JavaScript student.name ko dekhega aur
// name key ki value return karega.

// METHOD 2: BRACKET NOTATION

// Key ko square brackets aur quotes mein likhte hain.
console.log(student["name"]);  // Ibrahim
console.log(student["age"]);   // 14
console.log(student["class"]); // 9

// Dot notation aur bracket notation dono valid hain.

// Bracket notation tab useful hota hai jab key ka naam
// kisi variable mein stored ho.
let propertyName = "name";

console.log(student[propertyName]); // Ibrahim

// IMPORTANT:
// student.propertyName likhne par "propertyName" key
// search hogi, variable ki value nahi.
// Isliye dynamic key ke liye [] use karo.

// ==================================================
// 3. ADDING NEW PROPERTIES
// ==================================================

// Existing object mein new property add kar sakte hain.

student.city = "Delhi";
student.favoriteLanguage = "JavaScript";

console.log(student);

// Ab student object mein city aur favoriteLanguage
// bhi available hain.

// Bracket notation se bhi property add kar sakte hain.
student["favoriteColor"] = "Black";

console.log(student.favoriteColor); // Black

// ==================================================
// 4. UPDATING OBJECT PROPERTIES
// ==================================================

// Existing property ko new value assign karo.

student.age = 15;

console.log(student.age); // 15

// Pehle age 14 thi, ab 15 ho gayi.

// Object ki property update karne ke liye
// let student dobara likhne ki zaroorat nahi hai.

// ==================================================
// 5. DELETING OBJECT PROPERTIES
// ==================================================

// delete operator kisi property ko remove karta hai.

delete student.favoriteColor;

console.log(student.favoriteColor); // undefined

// favoriteColor property ab object mein nahi hai.

// Baaki properties delete nahi hongi.
console.log(student);

// ==================================================
// 6. OBJECT CAN STORE DIFFERENT DATA TYPES
// ==================================================

let profile = {
    username: "ibrahim",
    age: 14,
    isStudent: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Delhi",
        country: "India"
    },
    sayHello: function () {
        console.log("Hello!");
    }
};

// Object mein strings, numbers, booleans,
// arrays, doosre objects aur functions store ho sakte hain.

console.log(profile.username);        // ibrahim
console.log(profile.skills);          // Array
console.log(profile.skills[0]);       // HTML
console.log(profile.address.city);    // Delhi

// Nested object ka matlab object ke andar object.

// skills ek array hai, isliye index use kiya.
// address ek object hai, isliye city property access ki.

profile.sayHello(); // Hello!

// Object ke andar stored function ko method kehte hain.

// ==================================================
// 7. METHODS AND THE "this" KEYWORD
// ==================================================

let person = {
    name: "Ibrahim",
    age: 14,

    introduce: function () {
        // this current object ko refer karta hai
        // jab method ko normal tareeke se call kiya jaye.

        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
};

person.introduce();

// Output:
// My name is Ibrahim
// My age is 14

// this.name ka matlab yahan person.name hai.
// this.age ka matlab yahan person.age hai.

// Modern JavaScript mein method shorthand bhi use hota hai.

let anotherPerson = {
    name: "Ali",

    introduce() {
        console.log("Hello, I am " + this.name);
    }
};

anotherPerson.introduce(); // Hello, I am Ali

// ==================================================
// 8. OBJECTS WITH FUNCTIONS AND PARAMETERS
// ==================================================

let calculator = {
    add(a, b) {
        // a aur b function ke parameters hain.
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        // Zero se divide karna avoid kar rahe hain.
        if (b === 0) {
            return "Cannot divide by zero";
        }

        return a / b;
    }
};

console.log(calculator.add(10, 5));      // 15
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(10, 5)); // 50
console.log(calculator.divide(10, 5));   // 2
console.log(calculator.divide(10, 0));   // Error message

// calculator object ke andar 4 methods hain.
// calculator.add(10, 5) method ko call karta hai.
// return calculated result wapas deta hai.

// ==================================================
// 9. CHECKING IF A PROPERTY EXISTS
// ==================================================

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025
};

// "in" operator check karta hai ki property
// object mein present hai ya nahi.

console.log("brand" in car); // true
console.log("color" in car); // false

// hasOwnProperty() bhi apni property check karta hai.

console.log(car.hasOwnProperty("model")); // true
console.log(car.hasOwnProperty("color")); // false

// Property ki value undefined hone par bhi
// property object mein exist kar sakti hai.

car.color = undefined;

console.log("color" in car); // true
console.log(car.color);     // undefined

// ==================================================
// 10. OBJECT KE SAARE KEYS NIKALNA
// ==================================================

let phone = {
    brand: "Apple",
    model: "iPhone",
    price: 80000
};

// Object.keys() ek array return karta hai
// jismein object ki apni enumerable keys hoti hain.

console.log(Object.keys(phone));

// Output:
// ["brand", "model", "price"]

// ==================================================
// 11. OBJECT KI SAARI VALUES NIKALNA
// ==================================================

// Object.values() values ka array return karta hai.

console.log(Object.values(phone));

// Output:
// ["Apple", "iPhone", 80000]

// ==================================================
// 12. KEYS AUR VALUES KO EK SAATH NIKALNA
// ==================================================

// Object.entries() har property ko
// [key, value] pair ke roop mein deta hai.

console.log(Object.entries(phone));

// Output:
// [
//   ["brand", "Apple"],
//   ["model", "iPhone"],
//   ["price", 80000]
// ]

// ==================================================
// 13. LOOP KE THROUGH OBJECT READ KARNA
// ==================================================

let laptop = {
    brand: "Apple",
    model: "MacBook Air",
    ram: "16GB",
    storage: "512GB"
};

// for...in loop object ki enumerable keys par chalta hai.

for (let key in laptop) {
    // key mein har baar ek property ka naam aayega.

    console.log(key);

    // laptop[key] us key ki value dega.
    console.log(laptop[key]);
}

// Output mein har property ka naam aur value aayegi.

// ==================================================
// 14. OBJECT ENTRIES KE SAATH LOOP
// ==================================================

// Object.entries() se key aur value dono milte hain.

for (let [key, value] of Object.entries(laptop)) {
    console.log(key + ": " + value);
}

// Example output:
// brand: Apple
// model: MacBook Air
// ram: 16GB
// storage: 512GB

// Yahan destructuring use hui hai:
// [key, value] har entry ke do parts ko alag variables
// mein store karta hai.

// ==================================================
// 15. OBJECT KE ANDAR OBJECT
// ==================================================

let user = {
    name: "Ibrahim",

    address: {
        house: 10,
        city: "Delhi",
        country: "India"
    }
};

console.log(user.address.city);    // Delhi
console.log(user.address.country); // India

// Pehle user ka address object access hua.
// Phir us address object ki city property access hui.

// ==================================================
// 16. OBJECT KE ANDAR ARRAY
// ==================================================

let developer = {
    name: "Ibrahim",
    skills: ["HTML", "CSS", "JavaScript", "C"]
};

console.log(developer.skills[0]); // HTML
console.log(developer.skills[1]); // CSS
console.log(developer.skills[2]); // JavaScript

// skills ek array hai.
// Array ke elements access karne ke liye indexes use hote hain.

// Array mein new skill add karna:
developer.skills.push("C++");

console.log(developer.skills);

// ==================================================
// 17. COPYING AN OBJECT
// ==================================================

let originalObj = {
    name: "Ibrahim",
    age: 14
};

// Spread syntax se ek shallow copy banayi.
let copyObj = { ...originalObj };

copyObj.name = "Ali";

console.log(originalObj.name); // Ibrahim
console.log(copyObj.name);     // Ali

// originalObj aur copyObj alag top-level objects hain.
// Isliye copyObj.name change karne se originalObj.name
// change nahi hota.

// IMPORTANT:
// Spread syntax shallow copy banati hai.
// Nested objects ke liye reference share ho sakta hai.

// ==================================================
// 18. OBJECT ASSIGN
// ==================================================

let first = {
    name: "Ibrahim"
};

let second = {
    age: 14,
    city: "Delhi"
};

// Object.assign() properties ko target object mein copy karta hai.
Object.assign(first, second);

console.log(first);

// Output:
// { name: "Ibrahim", age: 14, city: "Delhi" }

// Is example mein first target object tha,
// isliye first update ho gaya.

// ==================================================
// 19. DESTRUCTURING AN OBJECT
// ==================================================

let studentInfo = {
    name: "Ibrahim",
    age: 14,
    class: 9
};

// Destructuring object ki properties ko
// alag variables mein nikalti hai.

let { name, age: studentAge, class: studentClass } = studentInfo;

console.log(name);         // Ibrahim
console.log(studentAge);   // 14
console.log(studentClass); // 9

// class JavaScript ka reserved keyword hai,
// isliye variable ka naam studentClass rakha.
// class: studentClass ka matlab class ki value
// ko studentClass variable mein store karna hai.

// ==================================================
// 20. SPREAD SYNTAX SE OBJECT MERGE KARNA
// ==================================================

let personal = {
    name: "Ibrahim",
    age: 14
};

let education = {
    class: 9,
    school: "My School"
};

// Dono objects ki properties ko ek new object mein merge kiya.
let completeProfile = {
    ...personal,
    ...education
};

console.log(completeProfile);

// Output:
// {
//   name: "Ibrahim",
//   age: 14,
//   class: 9,
//   school: "My School"
// }

// Agar dono objects mein same key ho,
// toh baad wali value pehle wali ko overwrite kar sakti hai.

// ==================================================
// 21. OBJECT FREEZE
// ==================================================

let settings = {
    theme: "dark",
    language: "English"
};

// Object.freeze() object ki apni properties ko
// add, delete ya change karne se rokta hai.

Object.freeze(settings);

settings.theme = "light";

console.log(settings.theme); // dark

// Normal non-strict execution mein assignment silently fail
// ho sakta hai. Strict mode mein error aa sakta hai.

// Freeze shallow hota hai. Nested objects automatically
// freeze nahi hote.

// ==================================================
// 22. OBJECT SEAL
// ==================================================

let account = {
    username: "ibrahim",
    active: true
};

// Object.seal() new properties add karne aur
// existing properties delete karne se rokta hai.
// Existing writable properties update ho sakti hain.

Object.seal(account);

account.active = false; // Allowed
account.city = "Delhi"; // Add nahi hogi
delete account.username; // Delete nahi hoga

console.log(account);

// ==================================================
// 23. OBJECT REFERENCE: IMPORTANT CONCEPT
// ==================================================

let objectA = {
    score: 100
};

// Yahan objectB ko objectA ki same object reference mili.
let objectB = objectA;

objectB.score = 200;

console.log(objectA.score); // 200
console.log(objectB.score); // 200

// KYUN?
// objectA aur objectB dono SAME object ko refer karte hain.
// Isliye objectB ke through change karne par
// objectA se bhi updated value milti hai.

// ==================================================
// 24. OPTIONAL CHAINING
// ==================================================

let customer = {
    name: "Ibrahim"
};

// customer.address exist nahi karta.
// Direct customer.address.city likhne par error aayega.

// Optional chaining ?. missing property par
// crash hone ke bajaye undefined return kar sakti hai.

console.log(customer.address?.city); // undefined

// Ye nested properties ko safely access karne mein
// helpful hota hai.

// ==================================================
// 25. PRACTICAL REAL-WORLD OBJECT
// ==================================================

let product = {
    id: 101,
    name: "MacBook Air",
    price: 99999,
    inStock: true,

    discountPrice(discountPercentage) {
        // Original price se discount calculate karte hain.
        let discount = this.price * discountPercentage / 100;

        // Final price return karte hain.
        return this.price - discount;
    },

    displayDetails() {
        console.log("Product: " + this.name);
        console.log("Price: ₹" + this.price);
        console.log("In stock: " + this.inStock);
    }
};

product.displayDetails();

console.log(product.discountPrice(10));

// 10% discount ke baad price: 89999.1

// Is example mein properties bhi hain aur methods bhi.
// Ye real applications mein objects ka common use hai.