function vetParking(input) {
    let day = Number(input[0]);
    let hours = Number(input[1]);
    //let price = 0;
    let total = 0;
    let finalTotal = 0;

    for (let i = 1; i <= day; i++) {
        total = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
               // price = 2.50;
                total += 2.50;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                //price = 1.25;
                total += 1.25;
            } else {
               // price = 1;
                total += 1;
            } 
        }
        finalTotal +=total ;
        console.log(`Day: ${i} - ${total.toFixed(2)} leva`);
    }
    console.log(`Total: ${finalTotal.toFixed(2)} leva`);
} 
vetParking(["5", "2"]);