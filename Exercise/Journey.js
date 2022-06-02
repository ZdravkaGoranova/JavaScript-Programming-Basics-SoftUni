function jurney(input){
let budjet = Number (input[0]);
let season = input[1];
let price = 0;

if (budjet<=100){
    if(season==="summer"){
    price = budjet * 0.30;}
    else if(season==="winter"){
        price = budjet * 0.70;
        
    }
}else if(budjet<=1000 && budjet >100){
    if(season==="summer"){
        price = budjet * 0.40;}
        else if(season==="winter"){
            price = budjet * 0.80;
        }
}else if(budjet >1000){

        price =budjet * 0.90;
   
}if (budjet<=100){ 
    console.log(`Somewhere in Bulgaria`);}
    else if(budjet<=1000){ 
        console.log(`Somewhere in Balkans`);}
        else if(budjet >1000){
            console.log(`Somewhere in Europe`);}

   if(season=="winter"){
    console.log(`Hotel - ${price.toFixed(2)}`);
} else if(budjet >1000){
    console.log(`Hotel - ${price.toFixed(2)}`);
}else if(season=="summer"){
    console.log(`Camp - ${price.toFixed(2)}`);
 }
}jurney(["1500","summer"]);