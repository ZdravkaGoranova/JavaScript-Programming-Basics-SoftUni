function trekkingMania(input){
    let index= 0;
    let countGrup = Number(input[index]);
    index++;

    let countClimpMusla = 0;
    let countClimpMonblan = 0;
    let countClimpCilimandjaro = 0;
    let countClimpK2 = 0;
    let countClimpEverest = 0;

for (let i= 0; i<= countGrup; i++){
    let countPeople =Number(input[index]);
    index++;

if ( countPeople<=5){
 countClimpMusla += countPeople;
}else if ( countPeople<=12 && countPeople >= 6){
    countClimpMonblan += countPeople;
   }else if ( countPeople<= 25  && countPeople >=13){
    countClimpCilimandjaro += countPeople;
   }else if ( countPeople<= 40  && countPeople >=26){
    countClimpK2 += countPeople;
   }else if(countPeople >=41){
    countClimpEverest += countPeople;
   
   }}
let totalPeople = countClimpMusla +countClimpMonblan +countClimpCilimandjaro + countClimpK2+ countClimpEverest;

console.log(((countClimpMusla/totalPeople)*100).toFixed(2)+"%");
console.log(((countClimpMonblan/totalPeople)*100).toFixed(2)+"%");
console.log(((countClimpCilimandjaro/totalPeople)*100).toFixed(2)+"%");
console.log(((countClimpK2/totalPeople)*100).toFixed(2)+"%");
console.log(((countClimpEverest/totalPeople)*100).toFixed(2)+"%");


}trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"]);