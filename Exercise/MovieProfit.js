function moveProfit(input){
let film = input[0];
let countDays= Number(input[1]);
let countTickeds =Number(input[2]); 
let priceForTicked= Number(input[3]);
let porcentForCinema=Number(input[4]);
let price=0;
let total=0;
let procentTotal=0;

price=  (countTickeds *priceForTicked) *countDays;
procentTotal= (price* (porcentForCinema/100));
total =price -procentTotal;
console.log(`The profit from the movie ${film} is ${total.toFixed(2)} lv.`);
}
moveProfit(["Python Basics",
"40",
"34785",
"10.45",
"14"]);