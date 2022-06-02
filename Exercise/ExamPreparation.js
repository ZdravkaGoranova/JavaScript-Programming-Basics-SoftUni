function exam(input){
let index =0;
let countNegativeGrade = Number (input[index]);
index++;
let command = input[index];
index++;

let sumGrade=0;
let countProblem=0;
let averege =0;
let currentNegativeGrade=0;
let lastName="";
let isneedBreak= false;

while(command!=="Enough"){
let problemName = command;
let grade = Number (input[index]);
index++;
lastName=problemName;
countProblem++;
sumGrade += grade;
if(grade<=4){
    currentNegativeGrade++;
}
if(currentNegativeGrade===countNegativeGrade){
    console.log(`You need a break, ${currentNegativeGrade} poor grades.`);
    isneedBreak= true;
    break;
}
    command = input[index];
    index++;
}
if(!isneedBreak){
averege= sumGrade/countProblem;
console.log(`Average score: ${averege.toFixed(2)}`);
console.log(`Number of problems: ${countProblem}`);
console.log(`Last problem: ${lastName}`);
}
}
exam(["2",
    "Income",
   "3",
    "Game",
    "6",
    "Best Player",
    "4"]);