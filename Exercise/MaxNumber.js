function maxNumber(input){
let index= 0;
let command = input[index];
index++;
let maxNumber= Number.MIN_SAFE_INTEGER;

while(command!=="Stop"){
let number = Number(command);
if(number >maxNumber){
    maxNumber = number;
}
command = input[index];
index++;
}
console.log(maxNumber);
}
maxNumber(["-1","-3","Stop"]);