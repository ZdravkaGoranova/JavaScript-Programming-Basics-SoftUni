function reportSystem(input) {
    let needSum = Number(input[0]);
    let index = 1;
    let command = input[index++];
    let counter = 0;
    let sumMoneyPay = 0;
    let sumMoneyCard = 0;
    let total = 0;
    while (command !== "End") {
        let money = Number(command);
        counter++;
        if (counter % 2 == 0 && money > 10) {
            sumMoneyCard += money;
            console.log(`Product sold!`);
        } else if (counter % 2 !== 0 && money <= 100) {
            sumMoneyPay += money;
            console.log(`Product sold!`);
        }
        else if (counter % 2 !== 0 && money > 100) {
            console.log(`Error in transaction!`);
        } else if (counter % 2 == 0 && money < 10) {
            console.log(`Error in transaction!`);
        }
        command = input[index++];
        total = sumMoneyPay + sumMoneyCard;
        if (total >= needSum){
            break;
        }
    }

    if (total >= needSum) {
        console.log(`Average CS: ${(sumMoneyPay / 2).toFixed(2)}`);
        console.log(`Average CC: ${(sumMoneyCard / 2).toFixed(2)}`);
    }
    if (command === "End") {
        console.log(`Failed to collect required money for charity.`);
    }

} reportSystem(["600", "86", "150", "98", "227", "End"]);