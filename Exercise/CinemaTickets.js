function cinemaTickets(input) {
    let index = 0;
    let command = input[index++];

    let studentCointre = 0;
    let standartCountre = 0;
    let kidsCountre = 0;
    let totalTicked = 0;

    while (command !== "Finish") {
        let film = command;
        let place = Number(input[index]);
        index++;
        let ticked = input[index];
        index++;
        let temporyTickedCounter = 0;

        while (ticked !== "End") {
            switch (ticked) {
                case "student": studentCointre++; break;
                case "standard": standartCountre++; break;
                case "kid": kidsCountre++; break;
            }
            temporyTickedCounter++;
            if (temporyTickedCounter >= place || ticked === "End") {
                break;
            }
            ticked = input[index];
            index++;
        }
        let tremAver = temporyTickedCounter / place * 100;
        console.log(`${film} - ${tremAver.toFixed(2)}% full.`);
        command = input[index++];
        totalTicked += temporyTickedCounter;
    }
    if (command === "Finish") {
        console.log(`Total tickets: ${ totalTicked }`);
        console.log(`${(studentCointre /totalTicked *100).toFixed(2)}% student tickets.`);
        console.log(`${(standartCountre /totalTicked *100).toFixed(2)}% standard tickets.`);
        console.log(`${ (kidsCountre++ /totalTicked *100).toFixed(2)}% kids tickets.`);
}

}cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]);