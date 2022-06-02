function  matchTickets(input){
let budjet = Number(input[0]);
let category = input[1];
let countPeople= input[2];
let restPrice =0;
let priceTicekt =0;
if(countPeople>=1 && countPeople<=4){
    restPrice = budjet * 0.25;
}
else if(countPeople>=5 && countPeople<=9){
    restPrice = budjet * 0.40;
}else if(countPeople>=10 && countPeople<=24){
    restPrice = budjet * 0.50;
}else if(countPeople>=25 && countPeople<=49){
    restPrice = budjet * 0.60;
}else{
    restPrice = budjet * 0.75;
}
if(category==="VIP"){
    priceTicekt = 499.99 * countPeople;
}else {
    priceTicekt = 249.99 * countPeople;
}
let diff = Math.abs(restPrice -priceTicekt);
if(restPrice > priceTicekt){
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
} else{
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
}
}
matchTickets(["30000","VIP","49"]);