let  createCounter = function(init) {
    let Value= init
    return{
     increment: function(){
       Value ++
       return Value
     },
     decrement: function(){
       Value --
       return Value
     },
     reset: function(){
       Value = init
       return Value
     },

    }
};
const counter = createCounter(6) 
console.log(counter.increment()) 
console.log(counter.reset())
console.log(counter.decrement())

