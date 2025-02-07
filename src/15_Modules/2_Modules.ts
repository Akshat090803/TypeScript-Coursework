//in this file we will import form utils.ts
//?Note-> for using import and export you need to make module:Common.js in ts.config

import log, { add2Nos, PI,Calculator } from "./1_Utils";
import * as Utils from './1_Utils'




//?This when we import as independently like  import { add2Nos, PI,Calculator } from "./1_Utils";

// console.log(add2Nos(3,5));
// console.log("Pi= ",PI);

// const calc=new Calculator(); 
// console.log(calc.add(4,3));
// console.log(calc.subtract(4,3));
// console.log(calc.multiply(4,3));
// console.log(calc.divide(4,3));




//?will work when import like this import * as Utils from './1_Utils' means imports all exports as a whole
//Utils will have all export of that file (Utils will be a object of all exports from that file)

console.log(Utils.add2Nos(3,5));
console.log("Pi= ",Utils.PI);


const calc=new Utils.Calculator(); 
console.log(calc.add(4,3));
console.log(calc.subtract(4,3));
console.log(calc.multiply(4,3));
console.log(calc.divide(4,3).toFixed(2));


log("Akshat"); //see log is imported without {} because it is a default export