function foodDelivery(input){
let countChikenMenu = Number(input [0]);
let countFishnMenu = Number(input [1]);
let countVeganMenu = Number(input [2]);

let priceChikenMenu =  countChikenMenu * 10.35;
let priceFishnMenu =  countFishnMenu * 12.40;
let priceVeganMenu =  countVeganMenu * 8.15;
let totalPrice = priceChikenMenu + priceFishnMenu + priceVeganMenu;
let dessert =  totalPrice *0.20;
let delivery = 2.50;
let finalTotalPrice = totalPrice + dessert + delivery;
console.log( finalTotalPrice );
} 
foodDelivery(["9", "2", "6"]);