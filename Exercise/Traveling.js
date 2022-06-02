function travelling(input){
let index=0;
let command = input[index++];

while(command!=="End"){
    let destination= command;
    let needMoney= input[index++];
    let sum=0;

while( needMoney>sum ){
let tempMoney=Number(input[index++]);
sum +=tempMoney;
}
console.log(`Going to ${destination}!"`);
command = input[index++];
}
}
travelling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]
);