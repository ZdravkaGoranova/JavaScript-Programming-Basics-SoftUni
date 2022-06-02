function familiyTrip(input) {
    let budjet = Number(input[0]);
    let night = Number(input[1]);
    let priceForNight = Number(input[2]);
    let porcentForCost = Number(input[3]);
    let total = 0;
    let totLPorcent = 0;
    let finish = 0;
    let diff = 0;

    if (night > 7) {
        priceForNight = priceForNight * 0.95;
    }
    total = night * priceForNight;
    totLPorcent = (porcentForCost / 100) * budjet;
    finish = total + totLPorcent;
    diff = Math.abs(finish - budjet);

    if ( budjet >=finish) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }




} familiyTrip([
    "800.50",
    "8",
    "100",
    "2"]);
