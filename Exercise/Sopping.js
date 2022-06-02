function shopping(input){
let budget = Number(input[0]);
let cards = Number(input[1]);
let processors = Number(input[2]);
let ram = Number(input[3]);

let sumCards = cards * 250;
let priceProcessors =  sumCards * 0.35;
let priceRam = sumCards * 0.10;
let sumProcessors = processors * priceProcessors;
let sumRam = ram * priceRam;
let total = sumCards + sumProcessors + sumRam;

if( cards > processors){
    total = total *0.85;
}
if (budget >= total){
    console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
} else {
    console.log(`Not enough money! You need ${(total -budget).toFixed(2)} leva more!`);
}
}shopping(["920.45","3","1","1"]);