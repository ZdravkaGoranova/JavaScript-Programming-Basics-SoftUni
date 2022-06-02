function basketball (input){
let yearsTaksForTrining = Number (input [0]);
let sneakers =  yearsTaksForTrining - (yearsTaksForTrining * 0.40);
let outfit = sneakers -(sneakers * 0.2);
let ball =  (outfit *0.25);
let accessories =  ball * 0.2;
let totalExpenses = yearsTaksForTrining + sneakers +  outfit + ball + accessories;
    console.log(totalExpenses);
}
basketball (["550"]);