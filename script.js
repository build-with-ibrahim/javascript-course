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
// if inside a loop with countinue
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

function first() {
    console.log(10 + 20);
}

first(); // Output: 30

// return result ko function ke bahar deta hai.

function second() {
    return 10 + 20;
}

let answer = second();

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

let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

// 0 initial value hai.
// Har round mein price, sum mein add hota hai.

console.log(total); // 600


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