function toyShop(input){
let priceTrip = Number(input[0]);
let pizzelCount = Number(input[1]);
let dollCount = Number(input[2]);
let bearCount = Number(input[3]);
let minionCount = Number(input[4]);
let truckCount = Number(input[5]);

let sumPizzel = pizzelCount * 2.60;
let sumDoll = dollCount *3;
let sumBear =  bearCount *4.10;
let sumMinion = minionCount * 8.20;
let sumTruck = truckCount * 2;
let totalPrice = sumPizzel + sumDoll + sumBear + sumMinion + sumTruck;
let sumToys = pizzelCount + dollCount  + bearCount + minionCount + truckCount;
if (sumToys >= 50){
    totalPrice =totalPrice - (0.25* totalPrice);
}
let rental = totalPrice * 0.10;
let totalProfit =  totalPrice - rental;
let final = Math.abs(totalProfit - priceTrip);
 if( totalProfit >= priceTrip){
     console.log(`Yes! ${final.toFixed(2)} lv left.`)
 } else {
    console.log(`Not enough money! ${final.toFixed(2)} lv needed.`)
 }
} toyShop(["40.8","20","25","30","50","10"]);