// array sorting
let numbers=[0,1,2,4,5,8,9,66,44,5,3334]
numbers.sort((a,b) => {
  if(a>b) return 1;
  if(a<b) return -1;
})
//console.log(numbers)

// higher order function(map,filter,reduce) 

//MAP=====loop and returns to array
let result=[1,2,3,4,5,6,7,8,9].map (number=>number**2)
console.log(result)