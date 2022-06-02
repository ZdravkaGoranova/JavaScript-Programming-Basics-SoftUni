function fishTank(input){
let length = Number( input [0]);
let width = Number( input [1]);
let height = Number( input [2]);
let percent = Number( input [3])/100;

let volume = (length * width *  height)/ 1000;
let needsLiters =  volume *(1 - percent);
console.log(needsLiters );
}
fishTank(["105","77","89","18.5"]);