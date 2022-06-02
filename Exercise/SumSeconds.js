function sumSecond(input){
let time1 = Number(input[0]);
let time2 = Number(input[1]);
let time3 = Number(input[2]);

let sumTime = time1 + time2 + time3;
let minutes = Math.floor(sumTime / 60);
let secunds = sumTime % 60;
 if (secunds <10){
     console.log(`${minutes}:0${secunds}`);
 } else{
    console.log(`${minutes}:${secunds}`);
 }
}
sumSecond (["14","12","10"]);