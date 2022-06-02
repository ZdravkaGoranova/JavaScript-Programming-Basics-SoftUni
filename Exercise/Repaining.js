function repaiting (input){
let nylon = Number(input [0]);
let paint = Number(input [1]);
let liters = Number(input [2]);
let houres = Number(input [3]);

let sumNylon = 1.50 * (nylon + 2);
let sumPaiting = 14.50 *(paint + paint*0.10);
let sumLiters = liters * 5;
let priceBag = 0.40;
let totalSumOfMaterials = sumNylon + sumPaiting + sumLiters + priceBag;
let sumForMaster =  (totalSumOfMaterials * 0.30)*houres;
let total = sumForMaster + totalSumOfMaterials;
console.log(total);
}
repaiting (["5", "10", "10", "1"]);