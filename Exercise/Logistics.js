function logistig(input) {
    let countCargo = Number(input[0]);
    let index = 1;
    let ton = Number(input[index++]);
    let sum = 0;
    let price = 0;
    let counter = 0;
    let total = 0;
    let sumTon = 0;
    let averTotalTrean=0;
    let averTotalBus=0;
    let averTotalMicrobus=0;

    while (ton >= 0) {
        sumTon += ton;
        if (ton <= 3) {
            price = ton * 200;
            averTotalBus +=ton;
        } else if (ton <= 11 && ton >= 4) {
            price = ton * 175;
            averTotalMicrobus += ton;
        } else if(ton >= 12) {
            price = ton * 120;
            averTotalTrean += ton;
        }
        counter++;
        sum += price;
        ton = Number(input[index++]);
    }
    total = sum / sumTon;
    console.log(total.toFixed(2));
    console.log(`${(averTotalBus/sumTon *100).toFixed(2)}%`);
    console.log(`${(averTotalMicrobus/sumTon *100).toFixed(2)}%`);
    console.log(`${(averTotalTrean/sumTon *100).toFixed(2)}%`);
} logistig(["5", "2", "10", "20", "1","7"]);