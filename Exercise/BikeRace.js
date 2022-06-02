function bikeRace(input){
let countJuniors = Number(input[0]);
let countSeniors = Number(input[1]);
let routeType = input[2];
let priceJunior =0;
let priceSeniors =0;

if(routeType ==="trail"){
    priceJunior =5.50;
    priceSeniors =7;
}else if(routeType ==="cross-country"){
    priceJunior =8;
    priceSeniors =9.50;
    if(countJuniors +countSeniors >=50){
        priceJunior = priceJunior * 0.75;
        priceSeniors = priceSeniors * 0.75;  
    }
}else if(routeType ==="downhill"){
    priceJunior =12.25;
    priceSeniors =13.75;
}else if(routeType ==="road"){
    priceJunior =20;
    priceSeniors =21.50;  
}

let totalMoney = priceJunior *countJuniors +  priceSeniors * countSeniors;
let funalmoney =  totalMoney * 0.95;
console.log(funalmoney.toFixed(2));

}
bikeRace(["30","25","cross-country"]);