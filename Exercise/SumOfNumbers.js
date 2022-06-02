function sumOfNumbers(input){
let number = input[0];
let sum =0;
for (let i = 0; i< number.length; i++){
let character = Number(number.charAt(i));
sum = sum + character;

} 
console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);