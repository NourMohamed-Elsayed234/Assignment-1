// Question 1
let x = "123"
console.log(Number(x)+7) //130
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Question 2
let y = 0
if(!y){
    console.log("invalid")
}
// answer => invalid 
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Question 3
for(i=1;i<=10;i++){
    if(i%2==0) continue
    console.log(i)
}
//answer => 1,3,5,7,9 
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Question 4
let arr = [1,2,3,4,5]
let arrEven = arr.filter((num)=>{ return num%2==0})
console.log(arrEven)
//answer[2,4]
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Question 5
let arr1=[1,2,3]
let arr2 =[4,5,6]
let result =[...arr1,...arr2]
console.log(result)
//[1,2,3,4,5,6]
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 // Question 6
  let day = 2
switch(day){
 case 1:
    console.log("sunday")
  break
case 2:
    console.log("monday")
  break
case 3:
    console.log("Tuesday")
  break
case 4:
    console.log("Wednesday")
  break
case 5:
    console.log("Thursday")
  break
case 6:
    console.log("friday")
  break
case 7:
    console.log("Saturday")
 break
  default:
 console.log("wrong day")
}
//answer monday
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 // Question 7
let arrOne =["a","ab","abc"]
let getLengh = arrOne.map((num)=>{return num.length})
console.log(getLengh)
//answer [1,2,3]
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 // Question 8
 function diviation(num){
    if(num%3==0 && num%5==0 ){
        console.log("Divisible by both")
    }else{
    //Because if you enter a number that is not divisible by 3 or 5    
       console.log("It is not divisible") 
    }
}
diviation(15)
// answer Divisible by both
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Question 9
let square = num => num*num
console.log(square(5))
//anthour answer
let square = num => console.log(num*=num)
square(5)
// answer (15)
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Question 10
const person={
 name:"john",
 age:25
}
function getUser({name,age}){
  return (`${name} is ${age} yeare old`)  
}
console.log(getUser(person))

// answer => John is 25 years old
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Question 11
function sumtion(...numbers){
 let sum = 0
 for(let i=0;i<numbers.length;i++){
    sum = sum + numbers[i]
    
 }
 return sum
}
console.log(sumtion(1,2,3,4,5))
//answer => 15
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Question 12
function seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
      
    }, 3000);
    
  });
}
seconds().then((result) => {
  console.log(result);
});
// answer => success
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Question 13
let arr =[1,3,7,2,4]
let largest = (numbers)=>{ return Math.max(...numbers)}
console.log(largest(arr))
//answer => 7
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Question 14
let person={
    name:"john",
    age:30

}
function user(obj){
 return Object.keys(obj)

}
 console.log(user(person))
// answer => ["name","age"]
let test = function(text){
    text.split(" ")
return text
}
console.log(test("The quick brown fox"))
// answer => ["The", "quick", "brown", "fox"] 
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//Part 2: Essay Questions 
// Question 1

//The difference between forEach and for...of:
/**break and continue: forEach does not support break and continue statements. On the other hand, for...of supports both.

Execution: forEach executes in parallel, while for...of executes operations in order and waits for them.

Data Types: forEach is strictly used with arrays only, whereas for...of can be used with other data structures, not just arrays.

When to use each:

forEach: It is best used when you want to execute code for all elements without the need to stop or break the loop.

for...of: It is more suitable when you might need to stop the execution (using break) or when dealing with data types other than arrays.
 //************************************************************************************************************************************************* */
 */*
// Question 2
/**
 * Hoisting:
Hoisting is like printing a variable named X before defining it,
and then defining it and assigning a value to it after the print statement.
It will say that X is not defined. But how did it know that there is a variable X defined and assigned a value below? In short,
JavaScript reads the entire code before executing it and stores all the variables and their locations in something called the "lexical scope". Therefore,
hoisting acts as if I declared the variable above the print statement,
and assigned its value after printing.
*/
//like 
//let x
console.log(x)
//x =5
/*Temporal Dead Zone (TDZ):
As for the TDZ, it is a dead zone for the variable. For example,
 if I define a variable on line 6,
  I cannot use it on lines 3, 4, or 5, and so on. 

  like 
You can't use x before the definition line.
  let x=5
 */
//***************************************************************************8
// Question 3
/** difference between == and ===:

==: If I have the number 5 inside a string and I compare it to a number 5,
 it will return true, even though one is a string and the other is a number.
like*/
let y ="5"
"5"==5
//print true
/*===: However, if I compare them using ===,
 it will return false because they are not the same data type.
 */let y ="5"
"5"==5
//print false
/**
 * Question 4
 * 
 * Explain how try-catch works and why it is important in async operations
 *I use try to put the code that I suspect might produce an error. In catch,
  I put a message to show to the user so that if any problem occurs in the try block,
  the whole program doesn't stop and look bad. It is very suitable to use when dealing with async operations because these are operations that take time. 
 * |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
 *
 * /Question 5
 * Type Conversion:
It is when I manually convert a string to a number using a method like Number().
like */
let x = "1234"
console.log(Number(x))

/*Type Coercion:
It is when JavaScript directly converts a string to a number without me doing it manually. However,
 I will face a problem with the + operator, because in that case,
  JS won't convert it to a number and will perform concatenation instead.
 * like*/
let n= "5"
console.log(n*6)


