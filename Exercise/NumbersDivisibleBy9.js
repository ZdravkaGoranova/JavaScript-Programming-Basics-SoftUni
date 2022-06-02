function numbersDivisible(input){
let starNumber = Number(input[0]);
let endNumber = Number(input[1]);
let sum =0;
let resultNumbers = " ";
for (let i= starNumber; i< endNumber; i++){
if (i % 9=== 0){
if (!sum == 0){
    resultNumbers += " ";
}
resultNumbers += i; 
sum = sum +i;
}
}
console.log("The sum: " + sum);
let m = resultNumbers.split(" ");
for (let j=0; j< m.length;j++){
console.log(m[j]);
}

}
numbersDivisible(["100","200"]);
