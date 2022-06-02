function dishwasher(input) {
    let index = 1;
    let command = input[index++];
    let countBottle = Number(input[0]);
    let counterPlate = 0
    let counterPot = 0;
    let mililiters = 0;
    let counter = 0;
    let soupPot = 0;
    let soupPlate = 0;
    let finishSoup = false;
    let totalMil = 0;
    while (command !== "End") {
        let countDishes = Number(command);
        counter++;
        mililiters = countBottle * 750;
        if (counter % 3 == 0) {
            counterPot += countDishes;
            soupPot += countDishes * 15;
        } else {
            counterPlate += countDishes;
            soupPlate += countDishes * 5;
        }
        if (mililiters < (soupPlate + soupPot)) {
            finishSoup = true;
            break;
        }
        command = input[index++];

    }
    totalMil = Math.abs(mililiters - (soupPlate + soupPot));
    if (command === "End") {
        console.log(`Detergent was enough!`);
        console.log(`${counterPlate} dishes and ${counterPot} pots were washed.`);
        console.log(`Leftover detergent ${totalMil} ml.`);
    
    } if (mililiters < (soupPlate + soupPot)) {
        console.log(`Not enough detergent, ${totalMil} ml. more necessary!`);
    }
}
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);