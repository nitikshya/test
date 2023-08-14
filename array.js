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


