//Asynchronous Programming

// const fu=()=>console.log('HEYYYYY!🙋‍♀️')
// const fun=()=>console.log('Remember ME😅')
// const func=()=>console.log("It's Nitikshya❤️")
// const funt=()=>console.log('Your school friend👯‍♀️')
// const funti=()=>console.log('By the way')
// const funct=()=>console.log('How are you?')

// setTimeout(fu,2000)
// setTimeout(fun,3000)
// setTimeout(func,4000)
// setTimeout(funt,5000)
// setTimeout(funti,6000)
// setTimeout(funct,7000)

// const promise1=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     isReady=[true,false][Math.floor(Math.random()*2)]
//     isReady?resolve('your soup is ready🍲'):reject('there is no soup❌')},1000)
// })
// console.log(promise1
//     .then(value=>console.log(value))
//     .catch(value=>console.log(value))
// )

console.log('fetch:',
fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>console.log('response:',
response.json()))
)