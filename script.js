// var let const
// declaration and initialization

var a; // declaration
var b = 12; // declaration and initialization

// var
var c = 19;
// problems of var:
// window mai add hota hai
// function scoped hota hai
// aap firse declare kr sakte ho same name se and error nhi aayega

// const never be change
const dulha = "labuba";
const dulhan = "lady";
// dulha = "harramzada";
console.log(dulha+" weds "+dulhan);

// let and var can easily change
let dulhabylet = "labuba";
let dulhanbylet = "lady";
dulhabylet = "harramzada";
console.log(dulhabylet+" weds "+dulhanbylet);

var dulhabyvar = "labuba";
var dulhanbyvar = "lady";
dulhabyvar = "harramzada";
console.log(dulhabyvar+" weds "+dulhanbyvar);

// reassignment, redeclaration
// reassignment
var d = 12;
d = 6; // reassignment only possible in var and not in let, const
// redeclaration
var d;
console.log(d);

// temporal dead zone: utna area jitne mein js ko pta to hai ke variable exist krta hai par wu aapko value de nhi sakta
// console.log(e);
// let e = 2;

// temporal dead zone not work in var and it show undefined but not error
console.log(f);
var f = 1;

// hoisting impact per type
// hoisting -> ek variable ko jab js mein bnate hai to wo VARIABLE do hisso mein toot jaat hai and uska declare oart upar chala jata and uska initialization part neeche rah jata hai
console.log(g);
var g = 15; // it seprate in two part the first part is var g = undefined and this part goes to top and second part g = 15 it stay where it is

// hoisting work in all types of variable
// var -> hoist -> undefined
// let -> hoist -> error
// const -> hoist -> error

// scope (global, block, function)
// global scope love var:
var h = 19; // global
{
    var h = 20; // global
}
console.log(h);

// data types
// primitive -> aisi saari values jinki copy krne par tuhme ek real copy mil jaye
// string, number, boolean, null, undefined, symbol, bignit
// 12 - number
// 12.2 - number
// true and false are boolean
let i = true;
let j = false;
console.log(i,j);
// null ka mtlb hai apne jaan puch kr nhi di
let nothing = null; 
// undefined ka mtlb ki aapne ek variable bnaya aur usey value nhi di to jo value by default mili wu hai undefined
let k; console.log(k); // it prints undefined
// symbol -> unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// ui and u2 both are unique
// example
let obj = {
    uid: 1,
    name: "ibrahim",
    age: 12,
    email: "ibrahim@gmail.com",
}
let no = Symbol("uid");
obj[no] = 8595507101;

// refernce -> inko copy krne par real copy nhi milegi but aapko reference milega parent ka
// arrays, objects, functions
// [] {} ()
// arrays
let array = [1,2,3];
let copyarray = array;
copyarray.pop() // kill both number
// objects
let objects = {
    username: "ibrahim",
};
let copyobjects = objects;
copyobjects.username = "maaz";

// dynamic typing -> js mai static typing nhi hai and yaha par hai dyanmic typing jiska mtlb hai aap data ko change kr sakte ho kyunki yaha par dynamic data types hai
let dynamictyping = 12;
dynamictyping = true;
dynamictyping = "ibrahim"
dynamictyping = [1,2,3];
dynamictyping = null;
dynamictyping = undefined;

// typeof quirks (e.g typeof null === "object")
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

// type coercion (== vs ===)
// truthy vs falsy values
console.log(5+"1"); // not show error it show 11
console.log(5-"1"); // not show error it show 4
// 0 false "" null undefined NaN document.all -> false
// rest all -> true

// NaN is a number because javascript treated it like failed operation
let nan = NaN;
console.log(typeof nan);

// arthmetic, complarison, logical, assignment, unary, ternary operator
// + - / * % **
console.log(5+5);
console.log("ibrahim "+"ahmad");
console.log(10-5);
console.log(5*5);
console.log(10/5);
console.log(13/5); // give reminder
console.log(5**5);

// complarison
// =, ==, ===, !=, !==, >=, <=, >, <
// = is use for adding valye it is ass
let equal = 12;
// == it not check type
console.log(12 == "12"); // false but show true 
// === it properly check everything
console.log(12 === "12");
// != it not have strict complarsion
console.log(12 != 13); // true
console.log(12 != "12"); // false
// !== have strict comparsion
console.log(12 !== 13); // true
console.log(12 !== "12"); // false