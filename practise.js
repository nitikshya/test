/*console.log('HELLO WORLD')
console.log('This is Nitikshya Thapa')
// variable
address = 'From Biratnagar'
console.log(address)

//operator
food = 500
discountpercent = 0.5
discountamount = food * discountpercent
console.log(discountamount)*/

//user input
/*food = Number(prompt('how much for food?'))
vatpercent = Number(prompt('input%') / 100)
vatamount = food * vatpercent
console.log('vatamount',vatamount)
//alert(vatamount)
total = food + vatamount
console.log('total',total)

// simplest weather app
// conditionals
let weather = prompt('how is the weather')
if(weather=="rainy"){
  console.log("get your raincoat")}
else{
  console.log('get your sunglasses')}*/

//function
/*function SayMyName(){
  console.log('nanu')
}
SayMyName()

//argument
function compliment(name){
  comp= `Hi ${name}, you look amazing.`
  console.log(comp)
}
compliment('Aakriti')*/









/*food=Number(prompt("Price of food?"));
//console.log(food)
discountPercentage=Number(prompt("Discount Percent?"));
discountAmount=food*(discountPercentage/100);
totalAmount=food-discountAmount;
alert(totalAmount)*/ 


/*function sum(a,b){
  return a + b
}
num1=sum(50,50)
console.log(num1)

function calculatefoodtotal( food,discount)        
{
discountPercentage=discount/100;
discountAmount=food*discountPercentage;
total= sub(food,discountAmount)
return total
}
console.log(calculatefoodtotal(1000,10))*/


//arrow function
//arrow functon with explicit return


/*
const sumArrow = (a,b) =>
{
  return a+b
}

//arrow functon with implicit return
const sumArrow2 = (a,b) => a+b

console.log(sumArrow(500,500))
console.log(sumArrow2(5,500))

//const sum = (a,b) => a+b
//console.log(sum(400,400))

const sub = (c,d) => c-d
console.log(sub(400,40))

 const mul = (a,b) => a*b
console.log(mul(5,5));

const div = (a,b) => a/b;
console.log(div(400,20));

//array
//array methods(push,slice,indexof,length)
const groceries=['apple','mangoes','potatoes','cauliflower','asparagus']
console.log(groceries)
console.log(groceries[0])
groceries.push('litchi','kiwi')
console.log(groceries)

//array slice
console.log(groceries.slice(1,4))
console.log(groceries.indexOf('litchi'))
console.log(groceries.length)

//objects represented by curlybracket{}
const person={
  name:'Henry',
  cast:'Cavil'
}
//access object using dot notation,bracket notation
console.log(person.name)
console.log(person['cast'])
//assign object
person.contactno='9876543210'
console.log(person.contactno)

const person2={
  name:'Nitikshya',
  cast:'Thapa',
  contactno:'1234567899'
}
console.log(person2.name)
console.log(person2.cast)
console.log(person2.contactno)

const introduction=(name,work,income,expense)=>{
  const person={
  name:name,
  work: work,
  income:15000,
  expense:5000,
  saving: function(){
    return this.income-this.expense
  }
  }
  const intro =`Hi my name is ${person.name} and i am a ${person.work} and my total saving is Rs.${person.saving()}`
  return intro
}
//console.log(introduction('aakriti','teacher'))

const items=['apple','mangoes','potatoes','cauliflower','asparagus','litchi','kiwi','apple','mangoes','potatoes','cauliflower','asparagus','litchi']
//for(let i=0; i<items.length; i++){
  //console.log( i,items[i])
for (const list of items){
  console.log(list)
}


//sum of all in array
const number=[1,2,3,4,5,6]
let result=[]
for(const list of number){
    //console.log(2*list)
    result.push(list*2)
  }
  console.log(result)

  //using function
  const double=(numbers)=>{
    let result=[]
    for(const number of numbers){
      result.push(number**2)
    }
    return result
  }
  console.log(double([7,8,9,10,11,12]))

  const lettercount=() =>{
    const phrase='Are you alright? you seem to be quite today.'
    //for(const phr of phrase)
    for(const phr in phrase){
      //console.log(phr)
    }
  }
  lettercount()

  const count=(phrase) =>{
return{result:phrase.length}
  }
//const phrase= prompt('write your phrase..')
//console.log(count(phrase))

//sum of all numbers in array
const sumarray=(numbers) =>{
  let result=0;
  for(const number of numbers){
    //console.log(number)
    result= result+number
  }
  return {result}
}
const nums=[1,2,3,4,5]
//console.log(sumarray(nums))

// max function
const max=(numbers) =>{
  let result=numbers[0]
  for(const number of numbers){
    if(number>result){
      result=number
    }
  }
  return {result}
}
console.log(max([10,2,3,4,5])) */

const lettercount=(phrase) =>{
  console.log(phrase)
  let count ={}
  for(const letter of phrase){
    if(letter in count){
      count[letter]++   // count[letter]=count[letter]+1
    }
    else{
      count[letter]=1
    }
    console.log(letter)
  }
  return(count)
}
//console.log(lettercount('nitikshya'))

//letter count
const wordfrequency=(word)=>{
  let frequency={}
  rate =word.split(' ')
  for(const world of rate){
    //console.log(world)
    if (world in frequency){
      frequency[world]++
    }else{
      frequency[world]=1
    }
  }
  //console.log(rate)
  return frequency
}
//const userinput=prompt('write your sentence.')
//console.log(wordfrequency(userinput))

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
//console.log(result)

const double=(numbers)=>{
  return numbers.map(number=>number*2)
}
//console.log(double([1,2,3]))

//FILTER====loops and returns with and matching array
//without using .filter method
const filter=(numbers,compareno)=>{
  let result=[]
  for(const number of numbers){
    if(number>compareno){
      result.push(number)
    }
  }
  return result
}
//console.log(filter([1,2,3,4,5,6],3))

//using .filter method
const nums=[1,2,3,4,5,6,7,8,9]
//console.log(nums.filter(num=>num>6||num<2))

const actors=[ 
  {name:'henry',networth:90000000},
  {name:'siddharth', networth: 3000000},
  {name:'scarlet',networth:5000000},
  {name:'margot',networth:9000000}
]
let results= (actors.filter(actor=>actor.name))
//console.log(results)

let res= (actors.map(actor=>actor.name))
//console.log(res)
 
let resu= (actors.map(actor=>actor.networth))
//console.log(resu)

//reduce 
const nms=[1,2,3]
const ress=nms.reduce((a,b)=>a*b)
//console.log(ress)

const time= (actors.map(actor=>actor.networth).reduce((a,b)=>a+b))
//console.log(time)

const tim= (actors.reduce((a,b)=>a+b.networth,0))
//console.log(tim)

let title= document.getElementById('title')
console.log('before:',title.innerText)
title.innerText='Hey! there. Are you alright?'
console.log('after:',title.innerText)
//console.log(innerText.style.colour='red')


// let redDiv= document.getElementById('red')
// let yellowDiv= document.getElementById('yellow')
// let greenDiv= document.getElementById('green')

const square= document.querySelectorAll('.colorsquare')
console.log(square)

//console.log(square[0].value)
//console.log(square[1].value)
//console.log(square[2].value)

//for each loop

const timeclicked={'red':0,'yellow':0,'green':0}
square.forEach(square=>{
  square.onclick=()=>{
    timeclicked[square.value]++
   square.innerText=timeclicked[square.value]
  }
  //square.onclick=()=>console.log(square.id)
})

const cleargameButton=document.getElementById('clear')
cleargameButton.onclick=()=>clearscore()


function clearscore(){
  square.forEach(square=>square.innerText=' ')
}