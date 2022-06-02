function excursion (input){
let people = Number(input[0]);
let nigth = Number(input[1]);
let cardTransport = Number(input[2]);
let tickedMuz = Number(input[3]);
let totalGrup=0;
let sumCard=0;
let sumN=0;
let sumM=0;
let sumForP=0;
let finish=0;
sumN= 20 *nigth;
sumCard =1.60 *cardTransport;
sumM = tickedMuz *6;
sumForP = sumN +sumCard + sumM;
totalGrup = people *sumForP;
finish =  totalGrup + totalGrup*0.25;
console.log(finish.toFixed(2));

}excursion (["20",
    "14",
    "30",
    "6"
    ]);