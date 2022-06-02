function cinema(input){
let name =input[0];
let r = Number (input[1]);
let c =Number (input[2]);
let ticekt=0;

if(name =="Premier"){
    ticekt= 12.00;
} else if(name =="Normal"){
    ticekt= 7.50;
} else if(name =="Discount"){
    ticekt= 5.00;
} 
let price= ticekt * r * c;
console.log(price.toFixed(2)+ `\n`+ "leva");

}cinema(["Premier","10","12"]);