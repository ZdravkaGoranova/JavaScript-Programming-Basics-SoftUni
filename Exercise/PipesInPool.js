function pipesInPool(input) {
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);

    let VP1 = P1 * H;
    let VP2 = P2 * H;
    let total = VP1 + VP2;
    let diff = 100 - ((V - total) / V * 100);
    let VP1Porsent = VP1 / total * 100;
    let VP2Porsent = VP2 / total * 100;

    if (V > total) {
        console.log(`The pool is ${diff}% full. Pipe 1: ${VP1Porsent.toFixed(2)}%. Pipe 2: ${VP2Porsent.toFixed(2)}%.`);
    } else {
        console.log(`For ${H} hours the pool overflows with ${Math.abs(V - total).toFixed(2)} liters.`)
    }



} pipesInPool(["100", "100", "100", "2.5"]);