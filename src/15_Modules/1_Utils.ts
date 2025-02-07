//From here we will export

export const PI : number=3.14;

export function add2Nos(arg1:number,arg2:number):number{
  return arg1+arg2;
}

export class Calculator{
    add(arg1:number,arg2:number) :number{
      return arg1+arg2;
    }

    subtract(arg1:number,arg2:number) :number{
      return arg1-arg2;
    }

    multiply(arg1:number,arg2:number):number{
      return arg1*arg2;
    }

    divide (arg1:number,arg2:number):number{
      return arg1/arg2;
    }

}



function log(arg1:string){
  console.log(arg1);
}

export default log; //default export .It will be imported without { } braces