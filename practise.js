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


function sum(a,b){
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
console.log(calculatefoodtotal(1000,10))


//arrow function
//arrow functon with explicit return
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
assign object
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
