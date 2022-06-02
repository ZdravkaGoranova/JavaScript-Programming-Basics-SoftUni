function salary (input){
let index = 0;
let countWed = Number (input[index]);
index++;
let money =  Number (input[index]);
index++;

let isHaveSalary= true;

for (let i= 0; i< countWed; i++){
    let nameWeb = input[index];
    index++;
switch(nameWeb){
case"Facebook": money -= 150;break;
case"Instagram":money -= 100;break;
case"Reddit":money -= 50;break;
default:break;
}
if (money <= 0){
    isHaveSalary= false;
    console.log(`You have lost your salary.`);
    break;
}
}
if (isHaveSalary){
    console.log(money);
}
}
salary(["3","500","Facebook","Stackoverflow.com","softuni.bg"]);