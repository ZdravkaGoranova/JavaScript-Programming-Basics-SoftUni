function graduation(input){
let index= 1;
let name = input[0];
let sum =0;
let countGrades=0;
let fails =0;
let  currentGrades = Number (input[index]);


while(true){
if(fails >1){
    console.log(`${name} has been excluded at ${countGrades} grade`);
    break;
}
    currentGrades = Number (input[index]);
   if(currentGrades<4){
    fails++;
    index++;
    continue;
}
sum = sum + currentGrades;
if(currentGrades>=12){
  let total =  sum/currentGrades;  
   console.log(`${name} graduated. Average grade: ${total.toFixed(2)}`);
   break;
}
countGrades++;
index++;
}
}
graduation(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43"]);