function sequence(input){
let n =Number(input[0]);
let countNumber =1;

while(countNumber<=n){
console.log(countNumber);
countNumber = (countNumber*2) + 1;
}

}
sequence(["31"]);