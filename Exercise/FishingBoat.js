function fishingBoat (input){
let budjet = Number (input[0]);
let season = input[1];
let fishmans = Number(input[2]);
let priceShip = 0;

switch(season){
case"Spring":
priceShip = 3000;
if(fishmans % 2==0){
    priceShip = priceShip *0.5;
}
break;
case"Summer":
priceShip = 4200;
if(fishmans % 2==0){
    priceShip = priceShip *0.05;
}
break;
case"Autumn":
priceShip = 4200;
break;
case"Winter":
priceShip = 2600;
if(fishmans % 2==0){
    priceShip = priceShip *0.5;
}
break;
}
if(fishmans<=6){
    priceShip = priceShip * 0.9;
}else if(fishmans<=11 && fishmans>7 ){
    priceShip = priceShip * 0.85;
}else if(fishmans>=12 ){
    priceShip = priceShip * 0.75;
} 
let diff= Math.abs(budjet -priceShip);

if (budjet>=priceShip){
console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)}
else{
console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);}
}fishingBoat (["2000","Winter","13"]);