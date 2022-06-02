function courierExpress(input) {

    let kg = Number(input[0]);
    let type = input[1];
    let distance = Number(input[2]);

    let price = 0;
    let overPricingKg = 0;
    let overPricingKm = 0;
    let totalOver = 0;
    let totalSum = 0;
    switch (type) {
        case "standard":
            if (kg < 1) {
                price = 0.03 * distance;
            } else if (kg >= 1 && kg < 10) {
                price = 0.05 * distance;
            } else if (kg >= 10 && kg < 40) {
                price = 0.10 * distance;
            } else if (kg >= 40 && kg < 90) {
                price = 0.15 * distance;
            } else if (kg >= 90 && kg < 150) {
                price = 0.2 * distance;
            }
            console.log(`The delivery of your shipment with weight of ${kg.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
            break;
        case "express":
            if (kg < 1) {
                price = 0.03 * distance;
                overPricingKg = 0.03 * 0.8;
            } else if (kg >= 1 && kg < 10) {
                price = 0.05 * distance;
                overPricingKg = 0.05 * 0.40;
            } else if (kg >= 10 && kg < 40) {
                price = 0.10 * distance;
                overPricingKg = 0.10 * 0.05;
            } else if (kg >= 40 && kg < 90) {
                price = 0.15 * distance;
                overPricingKg = 0.15 * 0.02;
            } else if (kg >= 90 && kg < 150) {
                price = 0.2 * distance;
                overPricingKg = 0.20 * 0.01
            }
            overPricingKm = kg * overPricingKg;
            let totalOver = distance *overPricingKm ;
            let totalSum = totalOver + price;
            console.log(`The delivery of your shipment with weight of ${kg.toFixed(3)} kg. would cost ${totalSum.toFixed(2)} lv.`);
            break;
        default: break;
    }
    

}
courierExpress([
    "87",
    "express",
    "130"


]);