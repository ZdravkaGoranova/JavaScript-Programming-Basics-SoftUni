function GodzillaVsKong(input){
let budjet = Number(input[0]);
let people = Number(input[1]);
let priceForPeople = Number(input[2]);
let decor = budjet *0.10;
let sumDress =  people * priceForPeople;
if (people >150){
    sumDress = sumDress * 0.90;
} let totalPrice = decor + sumDress;
let diff = Math.abs(totalPrice  - budjet);
if ( totalPrice  > budjet ){
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
}else{
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
}
} GodzillaVsKong(["9587.88","222"," 55.68"]);