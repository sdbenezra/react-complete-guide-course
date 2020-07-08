## Intro
This is my code along with the Udemy course React - The Complete Guide (incl Hooks, React Router, Redux).

## Notes below are from https://academind.com/learn/javascript/tricky-parts

## Hoisting
JS engine runs over code and pulls out function definitions, that way you can refer to them in your code before they are defined if they are defined in this way:
```
function addOne(numToAdd) {
        result = result + numToAdd;
        return result;
    }
```

You can use this to move functions to the end of your code for organization.

## Primitive & Reference values
*Primitive values* are numbers, strings, booleans, symbol, null, undefined, bigInt.
* immutable - shared by copy
```
let number = 1;
console.log(number + 2);
number = number + 3;
```
Original number is not changed, it is copied to a new number.


Any *objects* are reference values, including arrays and functions.
* are mutable and shared by reference
```
const person = { age: 31};
const me = person;
person.age = 32;
console.log(me.age); // prints 32
```
*person* is a pointer to the original object, me is a pointer to the same object, mutating the person object also manipulates me because it points to the same object.

There is a way to copy an object, not just a pointer reference.

## Closures
A function can remember variable names and use them when called in the future, even when variable was declared outside the function at the time the function was defined.

## The *this* keyword
this refers to who called function.
```
const person = {
    age: 31,
    printAge() {
        console.log(this.age); // this refers to global window object if not called on anything
    }
}

const outputInfo = person.printAge:
outputInfo(); // printAge not called on anything - result is undefined
person.printAge(); // printAge called on person - result is 31
```

Look at who called the function, that is the this context.
