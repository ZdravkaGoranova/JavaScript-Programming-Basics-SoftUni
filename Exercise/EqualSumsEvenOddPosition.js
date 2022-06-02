function equalsSum(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let printLine = '';
    for (let i = n1; i >= n2; i++) {
        let sumOdd = 0;
        let sumEven = 0;
        let currentNum = "" + 1;
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 == 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if (sumEven === sumOdd) {
            printLine += `${i}`;
        }
    }
    console.log(printLine);
}
equalsSum(["100000",
    "100050"])