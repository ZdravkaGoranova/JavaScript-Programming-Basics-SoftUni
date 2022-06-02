function transportPrice(input) {
    let n = Number(input[0]);
    let time = input[1];
    let price = 0;
   
    if (n >= 100) {
        price = 0.06 * n;
    }
    else if (n >= 20) {
        if (time ==="day") {
            price = 0.09 * n;
        } else if (time === "night") {
            price = 0.70 + (0.90 * n);
        }}
        else if (n < 20) {
            if (time === "day") {
                price = 0.70 + (0.79 * n);
            } else if (time === "night") {
                price = 0.70 + (0.90 * n);
            }
        }
        console.log(price.toFixed(2));

    } transportPrice(["180", "night"]);