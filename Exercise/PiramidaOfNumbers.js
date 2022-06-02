function piramida(input) {
    let printNum = 1;
    let n = Number(input[0]);
let isFinish=false;
    for (let i = 1; i <= n; i++) {
        let buff = "";
        for (let j = 1; j <= i; j++) {
            buff += printNum + " ";
            printNum++;
            if (printNum > n) {
                isFinish=true;
                break;
            }
        }
        console.log(buff);
        if(isFinish){
            break;
        }
    }
} piramida(["12"]);