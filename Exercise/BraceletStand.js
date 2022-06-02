function braceletStand(input){
let money = Number(input[0]);
let profitForDay = Number(input[1]);
let expenses = Number(input[2]);
let priceForPre = Number(input[3]);

let sumMoney=0;
let profitForFullday=0;
let totalSafeMoney=0;
let diff=0;
let finishMoney=0;
sumMoney= 5* money;
profitForFullday= 5* profitForDay;
totalSafeMoney =sumMoney +profitForFullday;
finishMoney =totalSafeMoney -expenses;
diff =Math.abs(finishMoney - priceForPre);
if(finishMoney >= priceForPre){
    console.log(`Profit: ${finishMoney.toFixed(2)} BGN, the gift has been purchased.`);
}else if(finishMoney < priceForPre){
    console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`);
}



}braceletStand(["2.10",
"17.50",
"20.20",
"148.50"

    ]);