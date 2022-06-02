function numbersDivisible(input){
    let starNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let sum =0;
  let res = "";
    for (let i= starNumber; i< endNumber; i++){
    if (i % 9=== 0){
        sum = sum +i;
        res += `${i}\n`;
    }
    }
    console.log("The sum: " + sum);
   console.log(res);
      

    }
    numbersDivisible(["100","200"]);