function suppliesForSchool(input){
let pens = Number(input [0]);
let markers = Number(input [1]);
let litersPreparat = Number(input [2]);
let porcentDiscount = Number(input [3])/100;
let pricePenns = pens * 5.80;
let priceMarkers = markers * 7.20;
let priceLiters = litersPreparat * 1.20;
let totalSumPrice = pricePenns + priceMarkers + priceLiters;
let priceDiscount = totalSumPrice -( totalSumPrice * porcentDiscount);
console.log( priceDiscount)
}
suppliesForSchool(["4", "2", "5", "13"]);