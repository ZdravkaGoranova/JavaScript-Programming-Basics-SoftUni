function workingHour(input){
let hour = Number(input[0]);
let day = input[1];

if(day == "Monday"|| day == "Tueday" || day == "Wednesday" ||  day == "Thursday" || day == "Friday" || day == "Saturday"){
    if(hour <=18 && hour >=10){
console.log("open");}
else{
    console.log("closed");
}
} else if(day == "Sunday"){
    console.log("closed");
}
} workingHour(["32","Sunday"]);