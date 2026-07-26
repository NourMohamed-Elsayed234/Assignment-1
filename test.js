// let user=[{
//     name:"nour",
//     email:"noor@org.com",
//     password:"123456"
// }]
// let findOne=(email,fn)=>{
   
//         setTimeout(()=>{
//         let foundUser = user.find(u=>u.email == email)
//         console.log(user)
//         fn(foundUser)
//         return user
//         },2000)
//      }
// let checkPassword=(user,password)=>{
//     setTimeout(()=>{
//         if(user.password == password){
//         console.log("welcome")
//     }else{
//         console.log("wrong")
//     }

//     },3000)
    
// }
// // let login =(email,password)=>{
//     let foundUser  = findOne("noor@org.com",(data)=>{
//     checkPassword(data,"123456")
//     })
// }


// let one = (fn,fn2)=>{
//    setTimeout(()=>{
//    console.log("one")
//    if(fn && fn2){
//    fn(fn2)
//    }else if(fn){
//     fn()
//    }
//    },3000)

// }
// let two = (fn,fn2)=>{
//      setTimeout(()=>{
//    console.log("two")
//    if(fn && fn2){
//    fn(fn2)
//    }else if(fn){
//     fn()
//    }
//    },2000)


// }
// let third = (fn,fn2)=>{
//   setTimeout(()=>{
//    console.log("third")
//    if(fn && fn2){
//    fn(fn2)
//    }else if(fn){
//     fn()
//    }
//    },1000)


// }
// third(two,one)

// let y = 0
// if(!y){
//     console.log("invalid")
// }

// let n =[1,2,3,4,5,6,7,8,9,10]
// for(i=0; i<n.length;i++){
//     if(i%2==0){
//         continue
//     }
//     console.log(n)
// }

// for(i=1;i<=10;i++){
//     if(i%2==0) continue
//     console.log(i)
// }
// let arr = [1,2,3,4,5]
// let arrEven = arr.filter((num)=>{ return num%2==0})
// console.log(arrEven)

// let arr1=[1,2,3]
// let arr2 =[4,5,6]
// let result =[...arr1,...arr2]
// console.log(result)
//  let day = 2
// switch(day){
//  case 1:
//     console.log("sunday")
//   break
// case 2:
//     console.log("monday")
//   break
// case 3:
//     console.log("Tuesday")
//   break
// case 4:
//     console.log("Wednesday")
//   break
// case 5:
//     console.log("Thursday")
//   break
// case 6:
//     console.log("friday")
//   break
// case 7:
//     console.log("Saturday")
//  break
//   default:
//  console.log("wrong day")


// }


// let arrOne =["a","ab","abc"]
// let getLengh = arrOne.map((num)=>{return num.length})
// console.log(getLengh)

// function diviation(num){
//     if(num%3==0 && num%5==0 ){
//         console.log("Divisible by both")
//     }else{
//        console.log("It is not divisible") 
//     }
// }
// diviation(15)

// let square = num => console.log(num*=num)
// square(5)
// const person={
//  name:"john",
//  age:25
// }
// function getUser({name,age}){
//   return (`${name} is ${age} yeare old`)  
// }
// console.log(getUser(person))

// 
// let arr =[1,3,7,2,4]
// let largest = (numbers)=>{
//     for(let i=1;i<arr.length;i++ ){
//      return i.math
//     }
// }
// console.log()

// let person={
//     name:"john",
//     age:30

// }
// function user(obj){
//  return Object.keys(obj)

// }
//  console.log(user(person))

//  let n= "5"
// console.log(n*6)


// var createCounter = function(init) {
//     let Value= init
//     return{
//      increment: function(){
//        Value ++
//        return Value
//      },
//      decrement: function(){
//        Value --
//        return Value
//      },
//      reset: function(){
//        Value = init
//        return Value
//      },

//     }
// };
// const counter = createCounter(5)
// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.decrement())

let x =[1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<x.length;i++){
  if(x[i]%2==0){
    continue
  }
  console.log(x[i])
}
