function numbersDivisible(input){
    let starNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let sum =0;
  
    for (let i= starNumber; i< endNumber; i++){
    if (i % 9=== 0){
        sum = sum +i;
    }
    }
    console.log("The sum: " + sum);
    for (let i= starNumber; i< endNumber; i++){
        if (i % 9=== 0){
           console.log(i);
        }
    }
    }
    numbersDivisible(["100","200"]);