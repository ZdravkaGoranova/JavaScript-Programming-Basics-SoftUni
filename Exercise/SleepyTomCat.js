function sleepTom(input) {
    let index = 0;
    let freeDay = Number(input[index++]);

    let workDay = 365 - freeDay;
    let timePlay = workDay * 63 + freeDay * 127;
    let diffNorm = Math.abs(30000 - timePlay);
    let h= Math.trunc(diffNorm/60);
    let m = (diffNorm) %60;

    if (timePlay > 30000) {
        console.log(`Tom will run away`);
        console.log(`${h} hours and ${m} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${h} hours and ${m} minutes less for play`);
    }

} sleepTom(["113"]);