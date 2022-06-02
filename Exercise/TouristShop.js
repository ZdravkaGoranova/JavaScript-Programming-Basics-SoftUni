function touristShop(input) {
    let budget = Number(input[0]);
    let index = 1;
    let command = input[index++];
    let counter = 0;
    let sumPrice = 0;

    let diff = 0;
    while (command !== "Stop") {
        let price = Number(input[index++]);

        if (counter !== 0 && (counter + 1) % 3 === 0) {
            price = price / 2;
        }
        sumPrice += price;
        if (budget < price) {
            diff = Math.abs(budget - price);
            console.log(`You don't have enough money!`);
            console.log(`You need ${diff.toFixed(2)} leva!`);
            break;
        }

        budget -= price;
        command = input[index++];
        counter++;
    }
    if (command === "Stop") {
        console.log(`You bought ${counter} products for ${sumPrice.toFixed(2)} leva.`);
    }
} touristShop([
    "154",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "30",
    "Stop"

])