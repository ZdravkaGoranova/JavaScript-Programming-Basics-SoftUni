function cake(input){
let index=0;
let l = Number(input[index]);
index++;
let w = Number(input[index]);
index++;
let cakeSize= l*w;
let command = input[index];
index++;

let isHaveCake= true;

while(command !="STOP"){
let countPise= Number(command);
cakeSize -= countPise;

if(cakeSize < 0){
    isHaveCake=false;
    console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
    break;
}
command = input[index];
index++;
} if(isHaveCake){
console.log(`${cakeSize} pieces are left.`);}
}
cake(["10","10","20","20","20","20","21"]);