console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

hello();
// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
//let name = "Nancy";
function helloName(name) {
  console.log("Hello!" , name);
  return;
}
// Remember to call the function to test

helloName("nancy");

// 3. Function to add two numbers together & return the result
// I think this is what you are looking for...(First way)
function addNumbers(firstNumber, secondNumber) {
   return firstNumber + secondNumber;
}
console.log(addNumbers(5,6));
//This is sedond way - might be the way you were looking for
function sumNumbers(numberOne,NumberTwo){
  let daSum = numberOne + NumberTwo
  return daSum
};
console.log(sumNumbers(11,22));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1,num2,num3) {
  let threeMult = num1*num2*num3
  return threeMult
}
console.log ("using the multiply 3 functionwith 2,3 and 6 gives us:")
console.log (multiplyThree(2,3,6))


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } //end is positive
  else{ return false} ;//end is 'else' aka number is negative
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log("using the function isPostive for the number 3")
console.log(isPositive(3))
console.log("using the function isPostive for the number -42")
console.log(isPositive(-42))

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
//****Note for office hours... I think my function is returning values that are
//not of the correct type.  Ideally the function would return the value of
//the index number, instead of the actual index number.  Example: the array
//has 5 elements, a length of 5 and an index of 4 lets say the last number
//of the array is 17, the function should 'return' 17 - not the length value
//5 or index4...  I can't seem to figure out how to do this
//additionally the idea of "returning someting" is rough for me
//I want to see it... so I like to 'console.log' the return so I know it
//is returning (because otherwise, I don't know if its doing it).
//this is a test array to make sure the function works
let testArray = [1,4,5];
let testEmpty =[];
//
let daArray = [1,3,5,42,42]
console.log("This is the array length:")
console.log (daArray.length);
console.log("Hopefully this is the actual value of the last item:")
console.log (daArray[daArray.length-1]);
//
console.log("testing before the function:")
console.log(testArray)
console.log(testArray[testArray.length-1]);
console.log("the end of my pre-test");

function getLast(array) {
  if(array.length===0){
    return undefined
  } //returns undefined the array has no items
  else{
  let lastItemIndex = array.length-1
  return array[lastItemIndex]
  }
}
console.log(getLast(daArray))
//dear instructor - this is some messy stuff I used as I worked.
//I didn't see a need to delete it, if I should in the future, please inform me.
// console.log("I am testing the empty array:");
// console.log(getLast(testEmpty))
// console.log("I am testing the array with 1,4,5 in it:")
// console.log(getLast(testArray));
// console.log(testArray[1]);
// console.log("I am testing below this for array lenght");
// let multipleItems =[1,2,3];
// let noItems =[];
// let holding = multipleItems.length
// console.log (holding);
// console.log ("no items below:")
// console.log (noItems.length);
// console.log("above this is the testing for array length");

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
findValueArray=[2,7,9,27,42];

function find(value, array) {
  let findValue = false //I am assuming the value is not in the array
  //if I find it in the loop, I will change the find value to true
  for (let i = 0; i < array.length; i++) {
  if (value=array[i]) {
    findValue=true
  } else {

  }//I think every if statement should have an else - this is "do nothing else"
  }
  //see if index[i] is the value;
  //if the index is the value set "find value"=true and end
  //if the index is not the "find value" do it again for [i+1]
  //if the last index is not the value, just end and stay false
  return findValue;
}
console.log("below this you should see 'true' because it found 7 in the array" );
console.log(find(7,findValueArray));
console.log("below this you should see 'false' because it didn't find 99 in the array" );
console.log(find(99,findValueArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
