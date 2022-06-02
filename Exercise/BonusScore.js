function bonusScore(input){
let number = Number(input [0]);
let bonusTochki = 0;

if ( number <= 100 ){
    bonusTochki += 5;
} else if(number >1000){
    bonusTochki = 0.10 * number;  
}else {
    bonusTochki = 0.20 * number;
}
 if ( number % 2 === 0){
    bonusTochki +=1;
 } else if(number % 10 ===5){
    bonusTochki +=2;
 }
console.log(bonusTochki);
console.log(bonusTochki + number);
}
bonusScore(["15875"]);