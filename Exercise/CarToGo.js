function carToGo(input){
let budjet = Number (input[0]);
let season = input[1];
let carClass = "";
let typeCar="";
let priceCar=0;

if(budjet<= 100){
    carClass ="Economy class";
    if(season ==="Summer"){
        typeCar= "Cabrio";
        priceCar=budjet *0.35;
    }else{
        typeCar= "Jeep";
        priceCar=budjet *0.65;
    }
}else if(budjet > 100 &&budjet <=500){
    carClass ="Compact class";
    if(season ==="Summer"){
        typeCar= "Cabrio";
        priceCar=budjet *0.45;
    }else{
        typeCar= "Jeep";
        priceCar=budjet *0.80;
    }
}else if(budjet > 500){
    carClass ="Luxury class";
        typeCar= "Jeep";
        priceCar=budjet *0.90;
    }
console.log(carClass);
console.log(`${typeCar} - ${priceCar.toFixed(2)}`);
}
carToGo(["99.99","Summer"]);