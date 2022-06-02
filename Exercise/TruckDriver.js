function truckDriver(input){
let season = input[0];
let km = Number(input[1]);
let priceForKm =0;

switch(season){
case"Spring":
case"Autumn":
 if(km<=5000){
    priceForKm =0.75;
 }else if(km>5000 && km<=10000){
    priceForKm =0.95;
 }else if(km>10000 && km<=20000){
    priceForKm = 1.45;
 }
break;
case"Summer":
if(km<=5000){
    priceForKm =0.90;
 }else if(km>5000 && km<=10000){
    priceForKm =1.10;
 }else if(km>10000 && km<=20000){
    priceForKm = 1.45;
 }
break;
case "Winter":
    if(km<=5000){
        priceForKm =1.05;
     }else if(km>5000 && km<=10000){
        priceForKm =1.25;
     }else if(km>10000 && km<=20000){
        priceForKm = 1.45;
     }
break;
    }
    let finalPrice =(priceForKm *km);
    let total = (finalPrice *4) - ((finalPrice *4)*0.1);
console.log(total.toFixed(2));
}
truckDriver(["Autumn","8600"]);