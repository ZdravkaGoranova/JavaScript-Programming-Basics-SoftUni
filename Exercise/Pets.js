function pets(input) {
    let day = Number(input[0]);
    let foodPets = Number(input[1]);
    let foodDog = Number(input[2]);
    let foodCat = Number(input[3]);
    let foodTurtul = Number(input[4]);
    let totalFood = 0;

    let needFoodDog = day * foodDog;
    let needFoodCat = day * foodCat;
    let needFoodTurtul = (day * foodTurtul) / 1000;
    totalFood = needFoodDog + needFoodCat + needFoodTurtul;

    if (foodPets >= totalFood) {
        console.log(`${Math.floor(foodPets - totalFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(Math.abs(foodPets - totalFood))} more kilos of food are needed.`);
    }

} pets(["5",
    "10",
    "2.1",
    "0.8",
    "321"
])