function grandpaStavri(input) {
   
    let N = Number(input[0]);
   
    let index = 1;
    let sumLiters = 0;
    let sumaDeg = 0;
    let averD=0;
    while(index< input.length) {
        let liter = Number(input[index++]);
        let degrees = Number(input[index++]);
        sumaDeg += liter*degrees;
        sumLiters += liter;
        
    }
    averD=sumaDeg /sumLiters;


    console.log(`Liter: ${sumLiters.toFixed(2)}`);
    console.log(`Degrees: ${averD.toFixed(2)}`);
 if(averD<38){
     console.log(`Not good, you should baking!`);
 } else if(averD >=38 && averD <42){
     console.log(`Super!`);
 }else if(averD >42){
     console.log(`Dilution with distilled water!`);
 }

} grandpaStavri([
    "3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"
]);