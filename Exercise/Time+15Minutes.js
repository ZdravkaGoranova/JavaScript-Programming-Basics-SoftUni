function timeMinutes(input){
let hour = Number(input[0]);
let minuts = Number(input [1]);
let houtToMinutes =  hour* 60;
let sum = houtToMinutes + minuts;
let time15Minutes = sum + 15;
let finalHours = Math.floor(time15Minutes /60);
let finalMinutes = time15Minutes % 60;
if ( finalHours ==24){
    finalHours =0;
}if(finalMinutes<10){
    console.log(`${finalHours}:0${finalMinutes}`);
}else{
    console.log(`${finalHours}:${finalMinutes}`);
}
} timeMinutes(["12","49"]);