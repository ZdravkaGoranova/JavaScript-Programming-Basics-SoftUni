function onTimeFotTjeExam(input){
let examHours = Number(input[0]);
let examMinuts = Number(input[1]);
let ariveHours = Number(input[2]);
let ariveMinuts = Number(input[3]);


let timeExam = examHours *60 + examMinuts;
let arriveTime = ariveHours *60 +ariveMinuts;
let diff = Math.abs(timeExam - arriveTime);
    let h= Math.floor( diff/60);
    let m= diff %60;

if(timeExam<arriveTime ){
    console.log("Late");
    

    if(h>0){
        if(m<10){
            console.log(`${h}:0${m} hours after the start`);
        }else{
            console.log(`${h}:${m} hours after the start`);
        }
    } else {
        console.log(`${m} minutes after the start`);
    }
} else if(timeExam>= arriveTime && Math.abs(timeExam - arriveTime)<=30){
    console.log("On time");
    console.log(`${m} minutes before the start`);


}else {
    console.log("Early");
    if(h>0){
        if(m<10){
            console.log(`${h}:0${m} hours before the start`);
        }else{
            console.log(`${h}:${m} hours before the start`);
        }
    } else {
        console.log(`${m} minutes before the start`);
    }
}
}
onTimeFotTjeExam(["14","00","13","55"]);