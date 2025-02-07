//!func to caluclate factorial

function calcFact(num:number) : number {
  if(num < 2) return 1;
  return num* calcFact(num-1);
}
console.log("Factorial : ",calcFact(5)); //

//!Define a union type for  a vehiccle that can either be a car or bike with different propertiees
//write a function to log deatils based on vehicle type

type car={
  type:'car',
  brand:string,
  model:string
}

type bike={
  type:'bike',
  brand:string,
  model:string
}

type VehicleData=bike | car;



function getVehicleDetails(vehicle:VehicleData){
  if(vehicle.type==='car') {
    console.log(`Car Brand : ${vehicle.brand} and Car Model : ${vehicle.model}`);
  }
  else{
    console.log(`Bike Brand : ${vehicle.brand} and Bike Model : ${vehicle.model}`);
  }
}

const vehicle1:VehicleData={
  type:'car',
  brand:"Honda",
  model:"city"
}

const vehicle2:VehicleData={
  type:'bike',
  brand:"Tvs",
  model:"raider"
}

getVehicleDetails(vehicle1);
getVehicleDetails(vehicle2);