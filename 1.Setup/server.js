console.log("Hello World!");

// 1. Immediately invoked function expressions
(function () {
    console.log("IIFE1");
})();

var iife2 = function () {
    console.log("Normal Function");
};

iife2();

// 2. Closures
var append = (function () {
    var _counter = "";
    return function () { return _counter += "for "; }
})();

console.log(append());
console.log(append());
console.log(append());

// Currying
var CurrySample = function (word) {
    return function (user) {
        return [word, ", ", user].join("");
    };
};

var HelloUser = CurrySample("Hello");
console.log("Currying:" + HelloUser("World")); // Output: "Hello, World"

// // call

// console.log("--------------------------------------------")
// console.log("Call");
// console.log("--------------------------------------------")

// var user = {
//     name: "John Doe",
//     whatIsYourName: function () {
//         console.log(this.name);
//     }
// };

// user.whatIsYourName();
// var user2 = {
//     name: "for bar"
// };

// user.whatIsYourName.call(user2); 

// Call/Apply
console.log("--------------------------------------------")
console.log("Call/Appy");
console.log("--------------------------------------------")

var user = {
    greet: "Hello!",
    greetUser: function (userName) {
        console.log(this.greet + " , " + userName);
    }
};

var greet1 = {
    greet: "Hola"
};

user.greetUser.call(greet1, "World");
user.greetUser.apply(greet1, ["World"]);
