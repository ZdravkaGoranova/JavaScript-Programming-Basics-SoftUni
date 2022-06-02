function tank(input) {
    let type = input[0];
    let liters = Number(input[1]);
    let card = input[2];
    let price = 0;

    switch (card) {
        case "Yes":
            if (type === "Gasoline") {
                price = (2.22 - 0.18) * liters;
            }
            else if (type === "Diesel") {
                price = (2.33 - 0.12) * liters;
            }
            else if (type === "Gas") {
                price = (0.93 - 0.08) * liters;
            }
            break;
        case "No":
            if (type === "Gasoline") {
                price = 2.22 * liters;
            }
            else if (type === "Diesel") {
                price = 2.33 * liters;
            }
            else if (type === "Gas") {
                price = 0.93 * liters;
            }

            break;
        default:
            break;
    }if (liters > 25 && liters !==25 ) {
        price = price * 0.90;
    }
    else if (liters >= 20 && liters <= 25) {
        price = price * 0.92;
    }
    console.log(`${price.toFixed(2)} lv.`);
} tank(["Diesel", "19", "No"]);