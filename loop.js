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

const max=(numbers) =>{
  let result=numbers[0]
  for(const number of numbers){
    if(number>result){
      result=number
    }
  }
  return {result}
}
console.log(max([10,2,3,4,5]))