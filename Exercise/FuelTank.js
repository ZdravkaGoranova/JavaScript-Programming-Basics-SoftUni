function fuelTank(input){
    let index=0;
let type = input[index++];
let liters = Number(input[index++]);

switch (type){
    case "Diesel": break;
    case "Gasoline": break;
    case "Gas": break;
default:
    console.log(`Invalid fuel!`);
    break;
}
 if(liters >=25 && ( type==="Diesel" || type==="Gasoline" || type==="Gas")){
     console.log(`You have enough ${type.toLowerCase()}.`);
 }else if(liters <25&& ( type==="Diesel" || type==="Gasoline" || type==="Gas")){
    console.log(`Fill your tank with ${type.toLowerCase()}!`);
 }

}fuelTank(["Diesel","10"]);