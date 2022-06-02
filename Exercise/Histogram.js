function histogram(input){
let index= 0;
let n = Number(input[index]);
index++;

let countP1= 0;
let countP2= 0;
let countP3= 0;
let countP4= 0;
let countP5= 0;

for (let i= 0; i<n; i++){
    let number = Number(input[index]);
    index++;
if(number <200){
    countP1 ++;
}else if ( number >=200 && number <=399){
    countP2 ++;
}else if ( number >=400 && number <=599){
    countP3 ++;
}else if ( number >=600 && number <=799){
    countP4 ++;
}else {
    countP5 ++;
}}
let p1 = countP1/n*100;
let p2 = countP2/n*100;
let p3 = countP3/n*100;
let p4 = countP4/n*100;
let p5 = countP5/n*100;

 console.log(p1.toFixed(2)+"%");
 console.log(p2.toFixed(2)+"%");
 console.log(p3.toFixed(2)+"%");
 console.log(p4.toFixed(2)+"%");
 console.log(p5.toFixed(2)+"%");

}histogram(["3","1","2","999"]);