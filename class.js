// classes main topic
// methods
// properties

// const num=[1,2,3,4]
// num.push()
 
// learning this
class car{
    constructor(name,colour,topspeed){
        this.name=name
        this.colour=colour
        this.topspeed=topspeed
        this.currentspeed= 0;
    }
    // getter & setters
    // get currentspeed(){
    //     return currentspeed
    // }
    zerotosixty(){
        setTimeout(() => {
          console.log('wooh! that was fast')
          this.currentspeed=60; 
          console.log(this.currentspeed) 
        },3000)
    }
    drive(speed=10){
        // console.log('just drove 2 miles')
        this.currentspeed +=speed
        console.log(`driving speed at ${this.currentspeed}mph`)
    }
    brake(){
        console.log('push the brakeeeee!')
        this.currentspeed-=10
        console.log(`driving speed at ${this.currentspeed}mph`)
    }
    stop(){
        console.log('stop the car please')
        this.currentspeed=0;
        console.log(`driving speed at ${this.currentspeed}mph`)
    }
}
const ferrari= new car('ferrari','red',250)
//console.log(ferrari)
console.log(ferrari.name)
console.log(ferrari.colour)
console.log(ferrari.topspeed)

// console.log(ferrari.currentspeed)
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.brake()
ferrari.stop()
console.log(ferrari.currentspeed)
ferrari.drive()
console.log(ferrari.currentspeed)
ferrari.zerotosixty()

const porsche= new car('porsche','yellow',200)
//console.log(ferrari)
console.log(porsche.name)
console.log(porsche.colour)
console.log(porsche.topspeed)
porsche.drive(40)
console.log(porsche.currentspeed)
// const nums=[1,2,3,4,5]
// nums.forEach(_=>porsche.drive())
porsche.brake()
porsche.zerotosixty()
porsche.stop()
console.log(porsche.currentspeed)

//you can only have a method inside of classes
const numbers=[1,2,3]
numbers.push(4) //methods
// console.log(typeof)
console.log(numbers)

Array.prototype.myPush=function(item){
    this[this.length]=item
    return this
}
const fruits=['🥭','🍐','🍇','🍌','🍉']
fruits.myPush('🍍')
fruits.myPush('🍈')
fruits.myPush('🍊')
fruits.myPush('🍋')
fruits.myPush('🍎')
fruits.myPush('🍏')
fruits.myPush('🍑')
console.log(fruits)