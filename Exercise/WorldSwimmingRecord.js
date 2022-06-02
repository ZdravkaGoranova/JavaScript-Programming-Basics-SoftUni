function worldSwimmingRecord(input){
let record = Number(input[0]);
let meters = Number(input[1]);
let timeSecond = Number(input[2]);

let timeRecord = meters * timeSecond;
let timePluseSecond = Math.floor(meters/15)*12.5;
let totalTime = timePluseSecond + timeRecord;
let diff = Math.abs(record - totalTime);
if(record > totalTime ){
    let diff = Math.abs(record - totalTime);
console.log(`Yes, he succeeded! The new world record is ${totalTime .toFixed(2)} seconds.`);
} else   if(record <= totalTime ){
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
}}
worldSwimmingRecord(["10464","1500","20"]);