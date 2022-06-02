function back(input){
let heritage = Number(input[0]);
let year = Number(input[1]);
let spendMoney=0;
let diff =0;
let yearsOld=18;
let sumSpedMoney=0;

for (let i=1800; i<=year;i ++){
   
if(i %2==0){
    spendMoney= 12000;
    sumSpedMoney +=spendMoney;
}else{
    spendMoney= 12000 +50*(yearsOld);
    sumSpedMoney +=spendMoney
}
yearsOld++;
}
diff= Math.abs(heritage -sumSpedMoney);

if(sumSpedMoney <=heritage ){
    console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
}else{
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
}

}
back(["100000.15","1808"])