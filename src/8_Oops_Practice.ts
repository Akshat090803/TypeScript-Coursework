//!Create a Bank Acoount: create a BankAccount class and implement following property in it:
class BankAccount{
  public accountNo:string;
  private balance:number;

  constructor(acc:string,bal:number){
    this.accountNo=acc;
    this.balance=bal;
  }

  //Methods
  deposit(amt:number):void{
    if(amt>0){
      this.balance+=amt;
      console.log(`Amount ${amt} successfully deposited`)
    }
    else{
      console.error("Invalid Transaction: Please enter a valid amount");
    }
  }

  withdraw(amt:number):void{
        if(amt>0 && amt<=this.balance){
          this.balance-=amt;
          console.log(`Amount ${amt} successfully withdrawn`);
        }
        else{
          console.error("Invalid Transaction: Please enter a valid amount");
        }
  }

  getBalance():void{
    console.log(`Curr Balance: ${this.balance}`);
  }
}

const acc1=new BankAccount("123Abc2004",1000);
acc1.getBalance();//1000
acc1.deposit(500);
acc1.getBalance()//1500
acc1.deposit(-200);//will not deposit and console Invalid Transaction: Please enter a valid amount
acc1.getBalance()//1500
acc1.withdraw(300);
acc1.getBalance();//1200
