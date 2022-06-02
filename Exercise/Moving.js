function moving(input){
let index =0;
let w= Number(input[index]);
index++;
let l= Number(input[index]);
index++;
let h= Number(input[index]);
index++;
let isFreeSpace= true;

let aveilableSpace= l*w*h;
let command = input[index];
index++;

while(command!=="Done"){
let space = Number(command);
aveilableSpace -= space;

if(aveilableSpace<0){
    console.log(`No more free space! You need ${Math.abs(aveilableSpace)} Cubic meters more.`);
   isFreeSpace=false;
    break;
}
command = input[index];
index++;
}
 if(isFreeSpace){
console.log(`${aveilableSpace} Cubic meters left.`);}
}
moving(["10","1","2","4","6","Done"]);