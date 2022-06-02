    function firm(input) {
        let needHour = Number(input[0]);
        let day = Number(input[1]);
        let people = Number(input[2]);
        let overTime = 0;
        let freeDay = day * 0.9;
        let freeHour = freeDay * 8;
        let totalTime = 0;

        if (freeHour <= needHour) {
            overTime = people * 2 * day;
            totalTime = Math.floor(freeHour + overTime);
            if (totalTime >= needHour) {
                console.log(`Yes!${totalTime - needHour} hours left.`);
            } else {
                console.log(`Not enough time!${Math.abs(totalTime - needHour)} hours needed.`);
            }
        } else {
            console.log(`Yes!${freeHour - needHour} hours left.`);
        }

    } firm(["50", "5", "2"])