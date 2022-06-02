function harvest(input) {
    let index = 0;
    let X = Number(input[index++]);
    let Y = Number(input[index++]);
    let Z = Number(input[index++]);
    let countPeople = Number(input[index++]);

    let TotalGroz = X * Y;
    let litersWine = (0.40 * TotalGroz) / 2.5;

    if (litersWine < Z) {
        console.log(`It will be a tough winter! More ${Math.floor(Z - litersWine)} liters wine needed.`)
    } else if (litersWine >= Z) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litersWine)} liters.`)
        
        console.log(`${Math.ceil(litersWine - Z)} liters left -> ${Math.ceil((litersWine - Z)/countPeople)} liters per person.`);
    }

    } harvest(["1020", "1.5", "425", "4"]);