
 class money{
    constructor(balance){
        this.balance=balance
        console.log({previousbalance:`$${this.balance}`})
    }
    deposit(amount){
        this.balance+=Number(amount)
        console.log('deposited:',`$${amount}`)
        console.log({balance:`$${this.balance}`})
    }
    withdraw(amount){
        //guard clause
        if (this.balance- amount<=0){
            console.log("you can't withdraw money")
            return
        }
        this.balance-=Number(amount)
        console.log('withdrew:',amount)
        console.log({balance:`$${this.balance}`})
    }
 }
 const bank= new money(100)

  bank.deposit(100)
  bank.withdraw(100)
  //bank.withdrawal(100)
  //bank.withdrawal(100)
  bank.withdraw(500)

  const depositButton=document.getElementById('deposit')
  const withdrawButton=document.getElementById('withdraw')
  const amountInput=document.getElementById('amount')
  depositButton.onclick=()=>console.log(amountInput.value)
  withdrawButton.onclick=()=>console.log(amountInput.value)




