function tennisRanklist(input){
let index= 0;

let countTurnir = Number(input[index]);
index++;
let starPoints = Number(input[index]);
index++;

let sumPoints = 0;
let countWinTurnir = 0;

for (let i=0; i< countTurnir; i++){
let position = input[index];
index++;

switch(position){
case "W":sumPoints += 2000;countWinTurnir ++; break;
case "F": sumPoints += 1200; break;
case "SF": sumPoints += + 720; break;
}

}
let porsentWintTurnir= (countWinTurnir /countTurnir)*100;

console.log(`Final points: ${(sumPoints + starPoints)}`);
console.log(`Average points: ${Math.floor(sumPoints/countTurnir)}`);
console.log(`${porsentWintTurnir.toFixed(2)}%`);
}tennisRanklist(["5","1400","F","SF","W","W","SF"]);