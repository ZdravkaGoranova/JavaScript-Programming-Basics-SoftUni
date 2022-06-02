function wallking(input){
    let index =0;
    let sumSteps=0;
    let diff=0;
    let command= input[index]
    index++;
    
    while(sumSteps< 10000){// while(i<input.length)
        let  steps= Number(command);
    if(command ==="Going home"){// input[i]=="Going home"
        sumSteps += steps  ;//sum = sum + Number(input[index +1])
    }else{
        sumSteps += steps; //sum = sum + Number(input[index])
    }
        command= input[index]
        index++;
    }
    diff= Math.abs(sumSteps- 10000);
    if (sumSteps>=10000){
        console.log(`Goal reached! Good job!`);
        if(sumSteps>10000){
        console.log(`${diff} steps over the goal!`);
        }
    }else{
        console.log(`${diff} more steps to reach goal.`);
    }
}
wallking(["1500","3000","250","1548","2000","Going home","2000"]);