function everest(input) {
    let index = 0;
    let command = input[index++];
    let counterDay = 2;
    let claipMeters = 0;
    let startMeters = 5364;
    let totalClaip = 0;
    let isClip = true;
    let ismoreDay = true;
    while (command !== "END") {
        let nigth = command;
        let meters = Number(input[index++]);

        if (totalClaip >= 8848) {
            isClip = false;
            console.log(`Goal reached for ${counterDay} days!`);
            break;
        }
        if (nigth === "Yes") {
            counterDay++;
            claipMeters += meters;
        } else if (nigth === "No") {
            claipMeters += meters;
            counterDay--;
            ismoreDay =false;
        }
        totalClaip = startMeters + claipMeters;
        if (counterDay >5) {
            ismoreDay=true;
            break;
        }
        command = input[index++];
       
    }

    if (isClip || ismoreDay || command == "END") {
        console.log(`Failed!`);
        console.log(`${totalClaip}`);
    }
} everest
(["Yes",
"700",
"END"])	




