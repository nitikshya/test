// // array sorting
// let numbers=[0,1,2,4,5,8,9,66,44,5,3334]
// numbers.sort((a,b) => {
//   if(a>b) return 1;
//   if(a<b) return -1;
// })
// console.log(numbers)

// higher order function(map,filter,reduce) 

// //MAP=====loop and returns to array
// let result=[1,2,3,4,5,6,7,8,9].map (number=>number**2)
// //console.log(result)

// //FILTER=====loops and returns with and matching array
// const filter=(numbers,compareno)=>{
//   let result=[]
//   for(const number of numbers){
//     if(number>compareno){
//       result.push(number)
//     }
//   }
//   return result
// }
// //console.log(filter([1,2,3,4,5,6],3))

// //reduce 
// const nms=[1,2,3]
// const ress=nms.reduce((a,b)=>a*b)
// //console.log(ress)

// const time= (actors.map(actor=>actor.networth).reduce((a,b)=>a+b))
// //console.log(time)

// const tim= (actors.reduce((a,b)=>a+b.networth,0))
// //console.log(tim)

let result=[9,7,8,6,4,5,2,3,1]
const number=result.sort()
//console.log(number)

let fruits=['kiwi','litchi','mango','orange','pear']
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift('tomato')
console.log(fruits)
