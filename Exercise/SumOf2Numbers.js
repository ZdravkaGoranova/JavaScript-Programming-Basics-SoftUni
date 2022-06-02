function sumOf2Number(input){
let start = Number(input[0]);
let end =Number(input[1]);
let magigNumber= Number(input[2]);
let flag =false;
let count=0;

for(let i= start;i<= end; i++){
    for (let j= start; j<=end; j++){
        count++;
        let sum =i + j;
        if(sum === magigNumber){
            console.log(`Combination N:${count} (${i} + ${j} = ${sum})`);
            flag =true;
            break;
        }
       
    }
    if(flag === true){
        break;
    }
}
if(flag===false){
    console.log(`${count} combinations - neither equals ${magigNumber}`);
}
}
sumOf2Number(["88","888","1000"]);