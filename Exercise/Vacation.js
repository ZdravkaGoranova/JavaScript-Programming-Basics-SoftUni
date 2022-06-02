function vacantion(input){
let index=0;
let moneyNeedForVacation= Number(input[index]);
index++;
let availableMoney= Number(input[index]);
index++;

let spendDay=0;
let countday=0;
let isPositiveSavedMoney= true;

while(moneyNeedForVacation > availableMoney){
    let type = input[index];
    index++;
    let tempMoney= Number(input[index]);
    index++;
    countday++;

if(type==="save"){
    availableMoney += tempMoney;
    spendDay=0;
}else {
    availableMoney -=tempMoney;
    spendDay++;
if(availableMoney<0){
    availableMoney=0;
}
}
if(spendDay===5){
    console.log(`You can't save the money.`);
    console.log(`${countday}`);
    isPositiveSavedMoney=false;
    break;
}}
//if(moneyNeedForVacation<=availableMoney)
if(isPositiveSavedMoney){
    console.log(`You saved the money for ${countday} days.`);
}
}
vacantion(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);